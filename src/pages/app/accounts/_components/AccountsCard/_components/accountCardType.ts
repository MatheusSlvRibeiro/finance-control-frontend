import { ReactNode } from "react";

export type RowId =
	| "openingBalance"
	| "incomes"
	| "incomingTransfer"
	| "outgoingTransfers"
	| "expenses"
	| "currentBalance";

export type Account = {
	name?: string;
	type?: string;
	icon?: ReactNode;
	openingBalance: number;
	incomes: number;
	incomingTransfer: number;
	outgoingTransfers: number;
	expenses: number;
	balance: number;
};
