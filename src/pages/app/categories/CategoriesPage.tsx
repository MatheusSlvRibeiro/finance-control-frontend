import { useMemo, useState } from "react";
import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import Button from "@components/ui/button/button";
import { Minus, Plus } from "lucide-react";
import styles from "./Categoriespage.module.scss";
import { CategoriesList } from "./_components/CategoriesList/CategoriesList";
import { useCategories } from "@hooks/useCategories";
import { CategoryType } from "@appTypes/category";

export default function CategoriesPage() {
	const { data: categories, loading, error, reload } = useCategories();

	const [activeTab, setActiveTab] = useState<CategoryType>("income");

	const filtered = useMemo(
		() => categories.filter((c) => c.type === activeTab),
		[categories, activeTab],
	);

	if (loading) {
		return <div className={styles.state}>Carregando categorias...</div>;
	}

	if (error) {
		return (
			<div className={styles.state}>
				<p>Falha ao carregar: {error.message}</p>
				<Button variant="default" size="md" onClick={reload}>
					Tentar novamente
				</Button>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<PageHeader
				title="Categorias"
				subtitle="Organize suas transações por categorias"
			>
				<Button size="sm" variant="register">
					<Plus />
					Nova Categoria
				</Button>
			</PageHeader>

			<nav className={styles.navbar}>
				<button
					className={`${styles.navbarButton} ${
						activeTab === "income"
							? styles.navbarButtonActiveIncome
							: ""
					}`}
					onClick={() => setActiveTab("income")}
				>
					<Plus className={styles.incomeIcon} />
					Receitas
				</button>
				<button
					className={`${styles.navbarButton} ${
						activeTab === "expense"
							? styles.navbarButtonActiveExpense
							: ""
					}`}
					onClick={() => setActiveTab("expense")}
				>
					<Minus className={styles.expenseIcon} />
					Despesas
				</button>
			</nav>

			<CategoriesList categories={filtered} />
		</div>
	);
}
