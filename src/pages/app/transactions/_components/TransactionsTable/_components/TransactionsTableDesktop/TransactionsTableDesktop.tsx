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
		<table className={styles.transactionsTableDesktop__table}>
			<thead className={styles.transactionsTableDesktop__head}>
				<tr>
					<th className={styles.transactionsTableDesktop__headCell}>
						Descrição
					</th>
					<th className={styles.transactionsTableDesktop__headCell}>
						Categoria
					</th>
					<th className={styles.transactionsTableDesktop__headCell}>
						Conta
					</th>
					<th className={styles.transactionsTableDesktop__headCell}>
						Data
					</th>
					<th
						className={`${styles.transactionsTableDesktop__headCell} ${styles.transactionsTableDesktop__headCellEnd}`}
					>
						Valor
					</th>
					<th
						className={`${styles.transactionsTableDesktop__headCell} ${styles.transactionsTableDesktop__headCellEnd}`}
					>
						Ações
					</th>
				</tr>
			</thead>

			<tbody className={styles.transactionsTableDesktop__body}>
				{transactions.map((item) => {
					const category = getCategory(item.category);
					const categoryLabel = category?.name ?? item.category;
					const categoryBg = item.categoryColor ?? category?.color;
					const accountLabel = getAccountName(item.account);

					return (
						<tr key={item.id}>
							<td
								className={
									styles.transactionsTableDesktop__cell
								}
							>
								{item.description}
							</td>
							<td
								className={
									styles.transactionsTableDesktop__cell
								}
							>
								<div
									className={
										styles.transactionsTableDesktop__categoryPill
									}
									style={{ backgroundColor: categoryBg }}
								>
									{category?.icon ? (
										<span
											className={
												styles.transactionsTableDesktop__categoryIcon
											}
										>
											{category.icon}
										</span>
									) : null}
									<span
										className={
											styles.transactionsTableDesktop__categoryLabel
										}
									>
										{categoryLabel}
									</span>
								</div>
							</td>
							<td
								className={
									styles.transactionsTableDesktop__cell
								}
							>
								{accountLabel}
							</td>
							<td
								className={
									styles.transactionsTableDesktop__cell
								}
							>
								{formatDate(item.date)}
							</td>
							<td
								className={`${styles.transactionsTableDesktop__cell} ${styles.transactionsTableDesktop__cellEnd}`}
							>
								{formatCurrency(item.value)}
							</td>
							<td
								className={
									styles.transactionsTableDesktop__cellActions
								}
							>
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
