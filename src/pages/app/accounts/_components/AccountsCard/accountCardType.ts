export type RowId =
	| "openingBalance"
	| "incomes"
	| "incomingTransfer"
	| "outgoingTransfers"
	| "expenses"
	| "currentBalance";

export type Account = {
	openingBalance: number;
	incomes: number;
	incomingTransfer: number;
	outgoingTransfers: number;
	expenses: number;
	balance: number;
};
