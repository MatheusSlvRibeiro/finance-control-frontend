import type { Account, AccountType } from "@appTypes/account";
import { NumericAccountField } from "@appTypes/numericAccountField";
import { userAccounts } from "@mocks/userAccounts.mock";
import type { Transaction } from "@appTypes/transaction";
import { transactionsMock } from "@mocks/transactions.mock";

const sumBy = (accounts: Account[], field: NumericAccountField) =>
	accounts.reduce((acc, a) => acc + (a[field] ?? 0), 0);

const sumTransactions = (
	transactions: Transaction[],
	accountId: string,
	type: Transaction["type"],
) =>
	transactions.reduce(
		(acc, t) =>
			t.account === accountId && t.type === type ? acc + t.value : acc,
		0,
	);

const withDerivedTotals = (
	account: Account,
	transactions: Transaction[],
): Account => {
	const incomes = sumTransactions(transactions, account.id, "income");
	const expenses = sumTransactions(transactions, account.id, "expense");
	const incomingTransfer = 0;
	const outgoingTransfers = 0;
	const balance =
		account.openingBalance +
		incomes +
		incomingTransfer -
		outgoingTransfers -
		expenses;

	return {
		...account,
		incomes,
		expenses,
		incomingTransfer,
		outgoingTransfers,
		balance,
	};
};

export const accountService = {
	async getAll(): Promise<Account[]> {
		return userAccounts.map((a) => withDerivedTotals(a, transactionsMock));
	},

	async getByType(type: AccountType): Promise<Account[]> {
		return userAccounts
			.filter((t) => t.type === type)
			.map((a) => withDerivedTotals(a, transactionsMock));
	},

	async getTotals(): Promise<Record<NumericAccountField, number>> {
		const accounts = userAccounts.map((a) =>
			withDerivedTotals(a, transactionsMock),
		);

		return {
			openingBalance: sumBy(accounts, "openingBalance"),
			incomes: sumBy(accounts, "incomes"),
			incomingTransfer: sumBy(accounts, "incomingTransfer"),
			outgoingTransfers: sumBy(accounts, "outgoingTransfers"),
			expenses: sumBy(accounts, "expenses"),
			balance: sumBy(accounts, "balance"),
		};
	},

	async getTotalsByAccount(
		account: Account,
	): Promise<Record<NumericAccountField, number>> {
		const derived = withDerivedTotals(account, transactionsMock);

		return {
			openingBalance: derived.openingBalance,
			incomes: derived.incomes,
			incomingTransfer: derived.incomingTransfer,
			outgoingTransfers: derived.outgoingTransfers,
			expenses: derived.expenses,
			balance: derived.balance,
		};
	},
};
