import { categories } from "@mocks/categories.mock";
import type { Category, CategoryType } from "@appTypes/category";

export const categoryService = {
	async getAll(): Promise<Category[]> {
		await new Promise((resolve) => setTimeout(resolve, 300));

		return categories;
	},

	async getByType(type: CategoryType): Promise<Category[]> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		return categories.filter((t) => t.type === type);
	},
};
