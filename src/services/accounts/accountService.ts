import type { Account } from '@appTypes/account'
import { NumericAccountField } from '@appTypes/numericAccountField'
import type { Transaction } from '@appTypes/transaction'
import api from '@services/api'
import GenericService from '@services/genericService'
import { transactionService } from '@services/transactions/transactionService'

const sumBy = (accounts: Account[], field: NumericAccountField) =>
	accounts.reduce((acc, a) => acc + (a[field] ?? 0), 0)

const sumTransactions = (
	transactions: Transaction[],
	accountId: string,
	type: Transaction['type'],
) =>
	transactions.reduce(
		(acc, t) => (t.account === accountId && t.type === type ? acc + t.value : acc),
		0,
	)

function normalizeAccount(account: any): Account {
	return {
		...account,
		openingBalance: Number(account.opening_balance),
	}
}

const withDerivedTotals = (account: Account, transactions: Transaction[]): Account => {
	const incomes = sumTransactions(transactions, account.id, 'income')
	const expenses = sumTransactions(transactions, account.id, 'expense')
	const incomingTransfer = 0
	const outgoingTransfers = 0
	const balance =
		account.openingBalance + incomes + incomingTransfer - outgoingTransfers - expenses

	return {
		...account,
		incomes,
		expenses,
		incomingTransfer,
		outgoingTransfers,
		balance,
	}
}

class AccountService extends GenericService<Account> {
	constructor() {
		super('accounts')
	}

	async getUserAccounts(): Promise<Account[]> {
		const response = await api.get('/api/v1/accounts')
		const accounts = Array.isArray(response.data.results) ? response.data.results : []
		return accounts.map(normalizeAccount)
	}

	async getTotals(): Promise<Record<NumericAccountField, number>> {
		const accounts = await this.getUserAccounts()
		const transaction = await transactionService.getAll()
		const accountsWithTotals = accounts.map((a) => withDerivedTotals(a, transaction))

		return {
			openingBalance: sumBy(accountsWithTotals, 'openingBalance'),
			incomes: sumBy(accountsWithTotals, 'incomes'),
			incomingTransfer: sumBy(accountsWithTotals, 'incomingTransfer'),
			outgoingTransfers: sumBy(accountsWithTotals, 'outgoingTransfers'),
			expenses: sumBy(accountsWithTotals, 'expenses'),
			balance: sumBy(accountsWithTotals, 'balance'),
		}
	}

	async getTotalsByAccount(account: Account): Promise<Record<NumericAccountField, number>> {
		const transaction = await transactionService.getAll()
		const derived = withDerivedTotals(account, transaction)

		return {
			openingBalance: derived.openingBalance,
			incomes: derived.incomes,
			incomingTransfer: derived.incomingTransfer,
			outgoingTransfers: derived.outgoingTransfers,
			expenses: derived.expenses,
			balance: derived.balance,
		}
	}
}

export const accountService = new AccountService()
