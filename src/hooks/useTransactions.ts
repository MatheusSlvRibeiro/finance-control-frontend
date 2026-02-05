import type { Transaction } from '@appTypes/transaction'
import { useCallback, useEffect, useState } from 'react'
import { transactionService } from '@services/transactions/transactionService'

export function useTransactions() {
	const [data, setData] = useState<Transaction[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	const reload = useCallback(async () => {
		setLoading(true)
		setError(null)

		try {
			const list = await transactionService.getAll()
			setData(Array.isArray(list) ? list : [])
		} catch (e) {
			setError(e instanceof Error ? e : new Error('Erro ao carregar transações'))
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		let alive = true

		;(async () => {
			setLoading(true)
			setError(null)

			try {
				const list = await transactionService.getAll()
				if (alive) setData(Array.isArray(list) ? list : [])
			} catch (e) {
				if (alive)
					setError(e instanceof Error ? e : new Error('Erro ao carregar transações'))
			} finally {
				if (alive) setLoading(false)
			}
		})()

		return () => {
			alive = false
		}
	}, [])

	const getTransactionByType = useCallback(
		(type: Transaction['type']) => data.filter((item) => item.type === type),
		[data],
	)

	return { data, loading, error, reload, getTransactionByType }
}
