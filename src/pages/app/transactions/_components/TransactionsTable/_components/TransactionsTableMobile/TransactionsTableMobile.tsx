import { formatCurrency } from "@utils/formatCurrency";
import styles from "./TransactionsTableMobile.module.scss";
import { Dropdown } from "@components/ui/dropdown/Dropdown";
import type { Transaction } from "@appTypes/transaction";
import { formatDate } from "@utils/formatDate";
import { useCategoryLookup } from "@hooks/useCategoryLookup";
import { useAccountLookup } from "@hooks/useAccountLookup";

type Props = {
	transactions: Transaction[];
	onEdit: (t: Transaction) => void;
	onDelete: (t: Transaction) => void;
};

export function TransactionsTableMobile({
	transactions,
	onEdit,
	onDelete,
}: Props) {
	const { getCategory } = useCategoryLookup();
	const { getAccountName } = useAccountLookup();

	return (
		<table className={styles.transactionsTable}>
			<tbody className={styles.body}>
				{transactions.map((item) => {
					const category = getCategory(item.category);
					const categoryLabel = category?.name ?? item.category;
					const categoryBg = item.categoryColor ?? category?.color;
					const accountLabel = getAccountName(item.account);

					return (
						<tr className={styles.bodyRow} key={item.id}>
							<td className={styles.bodyRowMain}>
								<div className={styles.bodyRowAccount}>
									{accountLabel}
								</div>
								<div className={styles.bodyRowDescription}>
									{item.description}
								</div>
								<div
									className={styles.bodyRowCategory}
									style={{ backgroundColor: categoryBg }}
								>
									{category?.icon ? (
										<span
											className={
												styles.bodyRowCategoryIcon
											}
										>
											{category.icon}
										</span>
									) : null}
									<span
										className={styles.bodyRowCategoryLabel}
									>
										{categoryLabel}
									</span>
								</div>
							</td>

							<td className={styles.bodyRowMeta}>
								<div>
									<div className={styles.bodyRowDate}>
										{formatDate(item.date)}
									</div>
									<div className={styles.bodyRowValue}>
										{formatCurrency(item.value)}
									</div>
								</div>

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
