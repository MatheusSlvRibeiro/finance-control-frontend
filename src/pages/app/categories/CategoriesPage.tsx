import { useMemo, useState } from "react";
import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import Button from "@components/ui/button/button";
import { Minus, Plus } from "lucide-react";
import styles from "./Categoriespage.module.scss";
import categoriesData from "@data/categories.json";
import { CategoriesList } from "./_components/CategoriesList/CategoriesList";
import type { Category } from "./_components/CategoriesList/CategoriesList";

type CategoryType = "income" | "expense";

export default function CategoriesPage() {
	const [activeTab, setActiveTab] = useState<CategoryType>("income");

	const data = categoriesData as Category[];

	const filtered = useMemo(
		() => data.filter((c) => c.type === activeTab),
		[data, activeTab]
	);

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
