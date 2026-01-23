import {
	Home,
	Briefcase,
	Bus,
	HeartPulse,
	Laptop,
	PartyPopper,
	TrendingUp,
	Utensils,
	Wrench,
} from "lucide-react";
import type { Category } from "@appTypes/category";

export const categories: Category[] = [
	{
		id: "trabalho",
		name: "Trabalho",
		type: "income",
		color: "#4CAF50",
		icon: <Briefcase size={18} />,
	},
	{
		id: "investimentos",
		name: "Investimentos",
		type: "income",
		color: "#2E7D32",
		icon: <TrendingUp size={18} />,
	},
	{
		id: "freelance",
		name: "Freelance",
		type: "income",
		color: "#388E3C",
		icon: <Laptop size={18} />,
	},
	{
		id: "moradia",
		name: "Moradia",
		type: "expense",
		color: "#1976D2",
		icon: <Home size={18} />,
	},
	{
		id: "alimentacao",
		name: "Alimentação",
		type: "expense",
		color: "#F57C00",
		icon: <Utensils size={18} />,
	},
	{
		id: "transporte",
		name: "Transporte",
		type: "expense",
		color: "#5D4037",
		icon: <Bus size={18} />,
	},
	{
		id: "servicos",
		name: "Serviços",
		type: "expense",
		color: "#616161",
		icon: <Wrench size={18} />,
	},
	{
		id: "saude",
		name: "Saúde",
		type: "expense",
		color: "#C62828",
		icon: <HeartPulse size={18} />,
	},
	{
		id: "lazer",
		name: "Lazer",
		type: "expense",
		color: "#6A1B9A",
		icon: <PartyPopper size={18} />,
	},
] satisfies Category[];
