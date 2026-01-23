import { categoryService } from "@services/categoryService";
import { useCallback, useEffect, useState } from "react";
import type { Category } from "@appTypes/category";

export function useCategories() {
	const [data, setData] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const reload = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			const list = await categoryService.getAll();
			setData(list);
		} catch (e) {
			setError(
				e instanceof Error
					? e
					: new Error("Erro ao carregar categorias"),
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
				const list = await categoryService.getAll();
				if (alive) setData(list);
			} catch (e) {
				if (alive)
					setError(
						e instanceof Error
							? e
							: new Error("Erro ao carregar categorias"),
					);
			} finally {
				if (alive) setLoading(false);
			}
		})();

		return () => {
			alive = false;
		};
	}, []);

	return { data, loading, error, reload };
}
