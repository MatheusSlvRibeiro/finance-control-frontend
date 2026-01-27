import { useCallback, useState } from "react";
import type { Category } from "@appTypes/category";
import type { ModalType } from "../CategoriesPage";
import {
	createCategoryFormFromCategory,
	createEmptyCategoryForm,
	type CategoryFormState,
} from "../_components/CategoryForm/CategoryForm";

type UseCategoryModalResult = {
	isOpen: boolean;
	modalType: ModalType;
	selectedCategory: Category | null;
	form: CategoryFormState;
	setForm: (next: CategoryFormState) => void;
	openCreate: () => void;
	openEdit: (category: Category) => void;
	openDelete: (category: Category) => void;
	close: () => void;
};

export function useCategoryModal(): UseCategoryModalResult {
	const [isOpen, setIsOpen] = useState(false);
	const [modalType, setModalType] = useState<ModalType>(null);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);
	const [form, setForm] = useState<CategoryFormState>(() =>
		createEmptyCategoryForm(),
	);

	const close = useCallback(() => {
		setIsOpen(false);
		setModalType(null);
		setSelectedCategory(null);
	}, []);

	const openCreate = useCallback(() => {
		setSelectedCategory(null);
		setForm(createEmptyCategoryForm());
		setModalType("create");
		setIsOpen(true);
	}, []);

	const openEdit = useCallback((category: Category) => {
		setSelectedCategory(category);
		setForm(createCategoryFormFromCategory(category));
		setModalType("edit");
		setIsOpen(true);
	}, []);

	const openDelete = useCallback((category: Category) => {
		setSelectedCategory(category);
		setModalType("delete");
		setIsOpen(true);
	}, []);

	return {
		isOpen,
		modalType,
		selectedCategory,
		form,
		setForm,
		openCreate,
		openEdit,
		openDelete,
		close,
	};
}
