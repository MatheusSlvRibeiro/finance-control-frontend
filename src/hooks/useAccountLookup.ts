import type { Account } from "@appTypes/account";
import { useCallback } from "react";
import { useAccounts } from "./useAccounts";

function normalize(raw: string) {
	return raw.trim().toLowerCase();
}

export function useAccountLookup() {
	const { data: accounts, loading, error, reload } = useAccounts();

	const getAccount = useCallback(
		(raw?: string): Account | undefined => {
			if (!raw) return undefined;
			const normalized = normalize(raw);

			return (
				accounts.find((a) => a.id === raw) ??
				accounts.find((a) => a.name === raw) ??
				accounts.find((a) => normalize(a.id) === normalized) ??
				accounts.find((a) => normalize(a.name) === normalized)
			);
		},
		[accounts],
	);

	const getAccountName = useCallback(
		(raw?: string) => getAccount(raw)?.name ?? raw ?? "",
		[getAccount],
	);

	return { accounts, getAccount, getAccountName, loading, error, reload };
}
