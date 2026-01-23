export type CategoryType = "expense" | "income";

export interface Category {
	id: string;
	name: string;
	type: CategoryType;
	color: string;
	icon: React.ReactNode;
}