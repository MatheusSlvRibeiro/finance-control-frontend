import type { Account } from '@appTypes/account'
import { accountService } from '@services/accounts/accountService'
import { useCallback, useEffect, useState } from 'react'

export function useAccounts() {
	const [data, setData] = useState<Account[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	const reload = useCallback(async () => {
		setLoading(true)
		setError(null)

		try {
			const list = await accountService.getAll()
			setData(list)
		} catch (e) {
			setError(e instanceof Error ? e : new Error('Erro ao carregar contas'))
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
				const list = await accountService.getAll()
				if (alive) setData(list)
			} catch (e) {
				if (alive) setError(e instanceof Error ? e : new Error('Erro ao carregar contas'))
			} finally {
				if (alive) setLoading(false)
			}
		})()

		return () => {
			alive = false
		}
	}, [])

	return { data, loading, error, reload }
}
