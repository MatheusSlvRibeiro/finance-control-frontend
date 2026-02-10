import type { Account } from '@appTypes/account';
import { accountService } from '@services/accounts/accountService';
import { useCallback, useEffect, useState } from 'react';

export function useAccounts() {
	const [data, setData] = useState<Account[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const reload = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			const list = await accountService.getUserAccountsWithTotals();
			setData(Array.isArray(list) ? list : []);
		} catch (e) {
			setError(e instanceof Error ? e : new Error('Erro ao carregar contas'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		let alive = true;
		setLoading(true);
		accountService
			.getUserAccountsWithTotals()
			.then((accounts) => {
				if (alive) setData(Array.isArray(accounts) ? accounts : []);
			})
			.catch((e) => {
				if (alive) setError(e);
			})
			.finally(() => {
				if (alive) setLoading(false);
			});
		return () => {
			alive = false;
		};
	}, []);

	return { data, loading, error, reload };
}
