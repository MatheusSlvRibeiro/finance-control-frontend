import { User } from '@appTypes/user';
import api from '@services/api';
import GenericService from '@services/genericService';

class UserService extends GenericService<User> {
	constructor() {
		super('users');
	}

	async getMe(): Promise<User> {
		const response = await api.get('/api/v1/users/me/');
		return response.data;
	}
}

export const userService = new UserService