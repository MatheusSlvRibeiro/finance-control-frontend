import { transactionsMock } from "@mocks/transactions.mock";
import type { Transaction, TransactionType } from "@appTypes/transaction";
import { CategoryType } from "@appTypes/category";

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

	async getTotalByType(type: CategoryType): Promise<number> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		const transactions = await this.getAll();

		return transactions.reduce(
			(acc, t) => (t.type === type ? acc + t.value : acc),
			0,
		);
	},
};
