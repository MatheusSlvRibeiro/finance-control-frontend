import api from '@services/api'
import { AxiosRequestConfig } from 'axios'
const BASEURL = import.meta.env.VITE_API_URL

export default class GenericService<T> {
	protected url: string

	constructor(resource: string) {
		this.url = `${BASEURL}api/v1/${resource}`
	}

	async getAll(params?: AxiosRequestConfig): Promise<T[]> {
		const { data } = await api.get<T[]>(this.url, params)
		return data
	}

	async getByType(params?: AxiosRequestConfig): Promise<T> {
		const { data } = await api.get<T>(this.url, params)
		return data
	}

	async getByid(params?: AxiosRequestConfig): Promise<T> {
		const { data } = await api.get<T>(this.url, params)
		return data
	}
}
