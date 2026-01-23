import type { Account, AccountType } from "@appTypes/account";
import { NumericAccountField } from "@appTypes/numericAccountField";
import { userAccounts } from "@mocks/accounts/userAccounts";

const sumBy = (accounts: Account[], field: NumericAccountField) =>
	accounts.reduce((acc, a) => acc + (a[field] ?? 0), 0);

export const accountService = {
	async getAll(): Promise<Account[]> {
		return userAccounts;
	},

	async getByType(type: AccountType): Promise<Account[]> {
		return userAccounts.filter((t) => t.type === type);
	},

	async getTotals(): Promise<Record<NumericAccountField, number>> {
		const accounts = userAccounts;

		return {
			openingBalance: sumBy(accounts, "openingBalance"),
			incomes: sumBy(accounts, "incomes"),
			incomingTransfer: sumBy(accounts, "incomingTransfer"),
			outgoingTransfers: sumBy(accounts, "outgoingTransfers"),
			expenses: sumBy(accounts, "expenses"),
			balance: sumBy(accounts, "balance"),
		};
	},

	async getTotalsByAccount(
		account: Account,
	): Promise<Record<NumericAccountField, number>> {
		return {
			openingBalance: account.openingBalance,
			incomes: account.incomes,
			incomingTransfer: account.incomingTransfer,
			outgoingTransfers: account.outgoingTransfers,
			expenses: account.expenses,
			balance: account.balance,
		};
	},
};
