import { useEffect, useState } from "react";
import { AuthContext, AuthContextType } from "./authContext";
import * as authService from "@services/authService";
import type { User } from "@appTypes/user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const getStoredToken = () => localStorage.getItem("mock-access-token");

	const [accessToken, setAccessToken] = useState<string | null>(
		getStoredToken(),
	);

	const [user, setUser] = useState<User | null>(null);

	const isAuthenticated = Boolean(accessToken);

	useEffect(() => {
		const handleStorage = () => {
			setAccessToken(getStoredToken());
		};
		window.addEventListener("storage", handleStorage);
	}, []);

	const login: AuthContextType["login"] = async (email, password) => {
		const result = await authService.login(email, password);

		if (result.success) {
			setAccessToken(result.accessToken ?? null);
			setUser(result.user ?? null);
		}

		return result;
	};

	const logout: AuthContextType["logout"] = async () => {
		await authService.logout();
		setAccessToken(null);
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				accessToken,
				isAuthenticated,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
