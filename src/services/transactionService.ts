import { transactionsMock } from "@mocks/transactions/transactions.mock";
import type { Transaction, TransactionType } from "@appTypes/transaction";

const toTransactionType = (raw: string): TransactionType =>
	raw === "income" || raw === "expense" ? raw : "expense";

const normalizeTransaction = (
	t: (typeof transactionsMock)[number],
): Transaction => ({
	...t,
	type: toTransactionType(t.type),
});

const getNormalizedTransactions = (): Transaction[] =>
	transactionsMock.map(normalizeTransaction);

export const transactionService = {
	async getAll(): Promise<Transaction[]> {
		await new Promise((resolve) => setTimeout(resolve, 300));

		return getNormalizedTransactions();
	},

	async getByType(type: "income" | "expense"): Promise<Transaction[]> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		return getNormalizedTransactions().filter((t) => t.type === type);
	},
};
