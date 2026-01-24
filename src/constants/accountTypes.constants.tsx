import { Building2, PiggyBank, Wallet } from "lucide-react";
import type { SelectOption } from "@components/ui/select/Select";

export const accountTypes: SelectOption[] = [
	{
		value: "checking",
		label: "Conta corrente",
		icon: <Building2 size={18} />,
	},
	{
		value: "savings",
		label: "Poupança",
		icon: <PiggyBank size={18} />,
	},
	{
		value: "wallet",
		label: "Carteira",
		icon: <Wallet size={18} />,
	},
];
