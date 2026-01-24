import { formatCurrency } from "@utils/formatCurrency";
import type { Transaction } from "@appTypes/transaction";
import { Dropdown } from "@components/ui/dropdown/Dropdown";
import styles from "./TransactionsTableDesktop.module.scss";
import { formatDate } from "@utils/formatDate";
import { useCategoryLookup } from "@hooks/useCategoryLookup";
import { useAccountLookup } from "@hooks/useAccountLookup";

type Props = {
	transactions: Transaction[];
	onEdit: (t: Transaction) => void;
	onDelete: (t: Transaction) => void;
};

export function TransactionsTableDesktop({
	transactions,
	onEdit,
	onDelete,
}: Props) {
	const { getCategory } = useCategoryLookup();
	const { getAccountName } = useAccountLookup();

	return (
		<table className={styles.table}>
			<thead className={styles.head}>
				<tr>
					<th className={styles.headCell}>Descrição</th>
					<th className={styles.headCell}>Categoria</th>
					<th className={styles.headCell}>Conta</th>
					<th className={styles.headCell}>Data</th>
					<th className={`${styles.headCell} ${styles.headCellEnd}`}>
						Valor
					</th>
					<th className={`${styles.headCell} ${styles.headCellEnd}`}>
						Ações
					</th>
				</tr>
			</thead>

			<tbody className={styles.body}>
				{transactions.map((item) => {
					const category = getCategory(item.category);
					const categoryLabel = category?.name ?? item.category;
					const categoryBg = item.categoryColor ?? category?.color;
					const accountLabel = getAccountName(item.account);

					return (
						<tr key={item.id}>
							<td className={styles.cell}>{item.description}</td>
							<td className={styles.cell}>
								<div
									className={styles.categoryPill}
									style={{ backgroundColor: categoryBg }}
								>
									{category?.icon ? (
										<span className={styles.categoryIcon}>
											{category.icon}
										</span>
									) : null}
									<span className={styles.categoryLabel}>
										{categoryLabel}
									</span>
								</div>
							</td>
							<td className={styles.cell}>{accountLabel}</td>
							<td className={styles.cell}>
								{formatDate(item.date)}
							</td>
							<td className={`${styles.cell} ${styles.cellEnd}`}>
								{formatCurrency(item.value)}
							</td>
							<td className={styles.cellActions}>
								<Dropdown>
									<button
										type="button"
										role="menuitem"
										onClick={() => onEdit(item)}
									>
										Editar
									</button>
									<button
										type="button"
										role="menuitem"
										onClick={() => onDelete(item)}
									>
										Excluir
									</button>
								</Dropdown>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
