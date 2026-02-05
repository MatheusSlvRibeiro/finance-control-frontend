import { useEffect, useState } from 'react'
import { AuthContext, AuthContextType } from './authContext'
import * as authService from '@services/auth/authService'

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const getStoredToken = () => localStorage.getItem('token')

	const [accessToken, setAccessToken] = useState<string | null>(getStoredToken())
	const isAuthenticated = Boolean(accessToken)

	useEffect(() => {
		const handleStorage = () => {
			setAccessToken(getStoredToken())
		}
		window.addEventListener('storage', handleStorage)
		return () => window.removeEventListener('storage', handleStorage)
	}, [])


	const login: AuthContextType['login'] = async (email, password) => {
		const result = await authService.login(email, password)

		if (result.success) {
			setAccessToken(result.accessToken ?? null)
		}

		return result
	}

	const logout: AuthContextType['logout'] = async () => {
		await authService.logout()
		setAccessToken(null)
	}

	return (
		<AuthContext.Provider
			value={{
				accessToken,
				isAuthenticated,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
