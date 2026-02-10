import { formatCurrency } from '@utils/formatCurrency/formatCurrency';
import styles from './TransactionsTableMobile.module.scss';
import { Dropdown } from '@components/ui/dropdown/Dropdown';
import type { Transaction } from '@appTypes/transaction';
import type { TransactionsTableRow } from '../../TransactionsTable';

type Props = {
	rows: TransactionsTableRow[];
	onEdit: (t: Transaction) => void;
	onDelete: (t: Transaction) => void;
};

export function TransactionsTableMobile({ rows, onEdit, onDelete }: Props) {
	return (
		<table className={styles.transactionsTable}>
			<tbody>
				{rows.map((row) => {
					const { item } = row;

					return (
						<tr className={styles.transactionsTable__bodyRow} key={item.uuid}>
							<td className={styles.transactionsTable__bodyRowMain}>
								<div className={styles.transactionsTable__bodyRowAccount}>
									{row.accountLabel ?? 'Sem conta'}
								</div>
								<div className={styles.transactionsTable__bodyRowDescription}>
									{item.description ?? 'Sem descrição'}
								</div>
								<div
									className={styles.transactionsTable__bodyRowCategory}
									style={{ backgroundColor: row.categoryBg }}
								>
									{row.categoryIcon ? (
										<span
											className={
												styles.transactionsTable__bodyRowCategoryIcon
											}
										>
											{row.categoryIcon}
										</span>
									) : null}
									<span
										className={styles.transactionsTable__bodyRowCategoryLabel}
									>
										{row.categoryLabel ?? 'Sem categoria'}
									</span>
								</div>
							</td>

							<td className={styles.transactionsTable__bodyRowMeta}>
								<div>
									<div className={styles.transactionsTable__bodyRowDate}>
										{row.dateLabel}
									</div>
									<div className={styles.transactionsTable__bodyRowValue}>
										{row.valueNumber
											? formatCurrency(row.valueNumber)
											: 'Sem valor'}
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
