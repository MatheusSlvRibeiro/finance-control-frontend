import { User } from "@appTypes/user";
import { mockUser } from "@mocks/user.mock";

export type LoginResult = {
	success: boolean;
	message?: string;
	accessToken?: string;
	user?: User;
};

export async function login(
	email: string,
	password: string,
): Promise<LoginResult> {
	if (email === "joaosilva@gmail.com" && password === "123456") {
		const mockToken = "mock-jwt-token";

		localStorage.setItem("mock-access-token", mockToken);

		return {
			success: true,
			accessToken: mockToken,
			user: mockUser,
		};
	}

	return {
		success: false,
		message: "Credenciais inválidas",
	};
}

export async function logout() {
	localStorage.removeItem("mock-access-token");
}
