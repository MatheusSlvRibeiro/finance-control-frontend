import type { Transaction } from "@appTypes/transaction";

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const toISODate = (d: Date) => d.toISOString().slice(0, 10);

export const transactionsMock: Transaction[] = [
	{
		id: "1",
		description: "Salário",
		category: "Trabalho",
		categoryColor: "#22c55e",
		type: "income",
		account: "nubank",
		value: 5500,
		date: toISODate(today),
	},
	{
		id: "2",
		description: "Aluguel",
		category: "Moradia",
		categoryColor: "#ef4444",
		type: "expense",
		account: "nubank",
		value: 1100,
		date: toISODate(today),
	},
	{
		id: "3",
		description: "Supermercado",
		category: "Alimentação",
		categoryColor: "#f97316",
		type: "expense",
		account: "nubank",
		value: 450,
		date: toISODate(today),
	},
	{
		id: "4",
		description: "Novaes Ltda.",
		category: "FreeLance",
		categoryColor: "#14b8a6",
		type: "income",
		account: "nubank",
		value: 1200,
		date: toISODate(today),
	},
	{
		id: "5",
		description: "Internet",
		category: "Serviços",
		categoryColor: "#3b82f6",
		type: "expense",
		account: "nubank",
		value: 120,
		date: toISODate(yesterday),
	},
	{
		id: "6",
		description: "Academia",
		category: "Saúde",
		categoryColor: "#8b5cf6",
		type: "expense",
		account: "inter",
		value: 89,
		date: toISODate(yesterday),
	},
	{
		id: "7",
		description: "Spotify",
		category: "Serviços",
		categoryColor: "#3b82f6",
		type: "expense",
		account: "inter",
		value: 16.9,
		date: toISODate(yesterday),
	},
] satisfies Transaction[];
