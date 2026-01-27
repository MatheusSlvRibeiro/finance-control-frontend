import { useContext, createContext } from "react";
import type { User } from "@appTypes/user";
import type { LoginResult } from "@services/authService";

export type AuthContextType = {
	user: User | null;
	accessToken: string | null;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<LoginResult>;
	logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
	{} as AuthContextType,
);

export function useAuth(): AuthContextType {
	const ctx = useContext(AuthContext);
	if (!ctx) {
		throw new Error("useAuth must be used within AuthProvider");
	}
	return ctx;
}
