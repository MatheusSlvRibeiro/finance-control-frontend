export type TransactionType = "expense" | "income";

export interface Transaction {
	id: string;
	description: string;
	category: string;
	categoryColor?: string;
	type: TransactionType;
	account: string;
	value: number;
	date: string; //ISO yyyy-mm-dd
}
