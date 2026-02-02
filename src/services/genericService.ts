import axios, { AxiosRequestConfig } from 'axios'
const BASEURL = import.meta.env.VITE_BASEURL

export default class GenericService<T> {
	protected url: string

	constructor(resource: string) {
		this.url = `${BASEURL}/${resource}`
	}

	async getAll(params?: AxiosRequestConfig): Promise<T[]> {
		const { data } = await axios.get<T[]>(this.url, params)
		return data
	}

	async getByType(params?: AxiosRequestConfig): Promise<T> {
		const { data } = await axios.get<T>(this.url, params)
		return data
	}

	async getByid(params?: AxiosRequestConfig): Promise<T> {
		const { data } = await axios.get<T>(this.url, params)
		return data
	}
}
