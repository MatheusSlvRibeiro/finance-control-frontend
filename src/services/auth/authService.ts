import api from '@services/api';

const API_URL = import.meta.env.VITE_API_URL;

export type LoginResult = {
	success: boolean;
	message?: string;
	accessToken?: string;
};

export async function login(email: string, password: string): Promise<LoginResult> {
	try {
		const response = await api.post(`${API_URL}api/token/`, { email, password });
		const { access, refresh } = response.data;
		localStorage.setItem('token', access);
		localStorage.setItem('refreshToken', refresh);
		return { success: true, accessToken: access };
	} catch (error: any) {
		console.log(error.response?.data);
		return { success: false, message: error.response?.data?.detail || 'Erro ao fazer login' };
	}
}

export async function logout() {
	localStorage.removeItem('token');
}

export function getToken() {
	return localStorage.getItem('token');
}

export async function registerUser(data: {
	name: string;
	email: string;
	password: string;
	password_confirm: string;
}) {
	try {
		const response = await api.post(`${API_URL}api/v1/users/`, data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error: any) {
		throw error.response?.data || error;
	}
}
