import type { Transaction } from '@appTypes/transaction'
import { CategoryType } from '@appTypes/category'
import GenericService from '@services/genericService'
import axios from 'axios'
class TransactionService extends GenericService<Transaction> {
	constructor() {
		super('transactions')
	}

	async getTotalByType(type: CategoryType): Promise<number> {
		const { data } = await axios.get<Transaction[]>(this.url, { params: { type } })
		const total = data.reduce((sum, t) => sum + t.value, 0)
		return total
	}
}

export const transactionService = new TransactionService()
