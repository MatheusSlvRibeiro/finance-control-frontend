import type { Account } from '@appTypes/account'
import styles from './AccountsCard.module.scss'

export type RowId =
	| 'openingBalance'
	| 'incomes'
	| 'incomingTransfer'
	| 'outgoingTransfers'
	| 'expenses'
	| 'currentBalance'

export type RowKind = 'income' | 'expense' | 'balance'

export const rows = [
	{
		id: 'openingBalance',
		label: 'Saldo inicial',
		getValue: (a: Account) => a.openingBalance,
	},
	{ id: 'incomes', label: 'Receitas', getValue: (a: Account) => a.incomes },
	{
		id: 'incomingTransfer',
		label: 'Transf. creditadas',
		getValue: (a: Account) => a.incomingTransfer,
	},
	{
		id: 'outgoingTransfers',
		label: 'Transf. debitadas',
		getValue: (a: Account) => a.outgoingTransfers,
	},
	{ id: 'expenses', label: 'Despesas', getValue: (a: Account) => a.expenses },
	{
		id: 'currentBalance',
		label: 'Saldo atual',
		getValue: (a: Account) => a.balance,
	},
] as const

export const metricRows = rows.filter((r) => r.id !== 'currentBalance')
export const currentBalanceRow = rows.find((r) => r.id === 'currentBalance')

const ROW_KIND: Record<RowId, RowKind> = {
	openingBalance: 'balance',
	incomes: 'income',
	incomingTransfer: 'income',
	outgoingTransfers: 'expense',
	expenses: 'expense',
	currentBalance: 'balance',
}

export function getAmountClassName(rowId: RowId, value: number) {
	if (value === 0) return styles.amountDefault

	const kind = ROW_KIND[rowId]

	if (kind === 'income') return styles.amountIncome
	if (kind === 'expense') return styles.amountExpense

	return value > 0 ? styles.amountIncome : styles.amountExpense
}
