import { Building, PiggyBank, TrendingUp, Wallet } from "lucide-react";
import { ReactNode } from "react";

export type SelectAccountOptionType =
	| "checking"
	| "savings"
	| "wallet"
	| "investments";

export interface SelectAccountOption {
	label: string;
	value: string;
	type: SelectAccountOptionType;
	icon: ReactNode;
}

export const accountTypes: SelectAccountOption[] = [
	{
		label: "Conta corrente",
		value: "conta corrente",
		type: "checking",
		icon: <Building />,
	},
	{
		label: "Conta Poupança",
		value: "conta Poupança",
		type: "savings",
		icon: <PiggyBank />,
	},
	{
		label: "Carteira",
		value: "carteira",
		type: "wallet",
		icon: <Wallet />,
	},
	{
		label: "Investimentos",
		value: "investimentos",
		type: "investments",
		icon: <TrendingUp />,
	},
];
