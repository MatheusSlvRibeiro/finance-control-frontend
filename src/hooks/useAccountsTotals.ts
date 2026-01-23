import { AccountTotals } from "@appTypes/numericAccountField";
import { accountService } from "@services/accountService";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useAccountsTotals() {
	const [totals, setTotals] = useState<AccountTotals | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>();

	const reload = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			const t = await accountService.getTotals();
			setTotals(t);
		} catch (e) {
			setError(
				e instanceof Error ? e : new Error("Erro ao carregar totais"),
			);
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
				const t = await accountService.getTotals();
				if (alive) setTotals(t);
			} catch (e) {
				if (alive)
					setError(
						e instanceof Error
							? e
							: new Error("Erro ao carregar totais"),
					);
			} finally {
				if (alive) setLoading(false);
			}
		})();

		return () => {
			alive = false;
		};
	}, []);

	const derived = useMemo(() => {
		const t = totals ?? {
			openingBalance: 0,
			incomes: 0,
			incomingTransfer: 0,
			outgoingTransfers: 0,
			expenses: 0,
			balance: 0,
		};

		return {
			openingBalance: t.openingBalance,
			incomes: t.incomes,
			incomingTransfer: t.incomingTransfer,
			outgoingTransfers: t.outgoingTransfers,
			expenses: t.expenses,
			balance: t.balance,
		};
	}, [totals]);

	return { totals, ...derived, loading, error, reload };
}
