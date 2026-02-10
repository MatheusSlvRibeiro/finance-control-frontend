export type TransactionType = 'expense' | 'income'

export interface Transaction {
	uuid: string
	description: string
	category: string
	categoryColor?: string
	type: TransactionType
	account: string
	value: number
	date: string //ISO yyyy-mm-dd
}
