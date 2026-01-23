import { EllipsisVertical } from "lucide-react";
import styles from "./CategoriesList.module.scss";
import { Category } from "@appTypes/category";

type CategoriesListProps = {
	categories: Category[];
};

export function CategoriesList({ categories }: CategoriesListProps) {
	if (categories.length === 0) {
		return (
			<div className={styles.empty}>Nenhuma categoria encontrada.</div>
		);
	}

	return (
		<div className={styles.grid}>
			{categories.map((category) => (
				<div key={category.id} className={styles.card}>
					<div className={styles.cardLeft}>
						<span
							className={styles.colorDot}
							style={{ backgroundColor: category.color }}
							aria-hidden
						/>
						<div className={styles.label}>{category.name}</div>
					</div>

					<div>
						<button className={styles.editButton}>
							<EllipsisVertical />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
