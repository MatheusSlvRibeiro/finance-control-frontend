import type { Transaction } from '@appTypes/transaction';
import { useCallback, useEffect, useState } from 'react';
import { transactionService } from '@services/transactions/transactionService';
import { normalizeTransactions } from '@services/transactions/transactionNormalizer';

export function useTransactions() {
	const [data, setData] = useState<(Transaction & { dateFormatted?: string })[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const reload = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			const list = await transactionService.getAll();
			const transactions = Array.isArray(list.results) ? list.results : [];
			setData(normalizeTransactions(transactions));
		} catch (e) {
			setError(e instanceof Error ? e : new Error('Erro ao carregar transações'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		let alive = true;

		(async () => {
			setLoading(true);
			setError(null);

			try {
				const list = await transactionService.getAll();
				const transactions = Array.isArray(list.results) ? list.results : [];
				if (alive) setData(normalizeTransactions(transactions));
			} catch (e) {
				if (alive)
					setError(e instanceof Error ? e : new Error('Erro ao carregar transações'));
			} finally {
				if (alive) setLoading(false);
			}
		})();

		return () => {
			alive = false;
		};
	}, []);

	const getTransactionByType = useCallback(
		(type: Transaction['type']) => data.filter((item) => item.type === type),
		[data],
	);

	return { data, loading, error, reload, getTransactionByType };
}
