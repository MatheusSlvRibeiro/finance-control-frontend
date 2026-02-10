import { formatCurrency } from '@utils/formatCurrency/formatCurrency';
import type { Transaction } from '@appTypes/transaction';
import { Dropdown } from '@components/ui/dropdown/Dropdown';
import styles from './TransactionsTableDesktop.module.scss';
import type { TransactionsTableRow } from '../../TransactionsTable';

type Props = {
	rows: TransactionsTableRow[];
	onEdit: (t: Transaction) => void;
	onDelete: (t: Transaction) => void;
};

export function TransactionsTableDesktop({ rows, onEdit, onDelete }: Props) {
	return (
		<table className={styles.transactionsTableDesktop__table}>
			<thead className={styles.transactionsTableDesktop__head}>
				<tr>
					<th className={styles.transactionsTableDesktop__headCell}>Descrição</th>
					<th className={styles.transactionsTableDesktop__headCell}>Categoria</th>
					<th className={styles.transactionsTableDesktop__headCell}>Conta</th>
					<th className={styles.transactionsTableDesktop__headCell}>Data</th>
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
				{rows.map((row) => {
					const { item } = row;

					return (
						<tr key={item.uuid}>
							<td className={styles.transactionsTableDesktop__cell}>
								{item.description ?? 'Sem descrição'}
							</td>
							<td className={styles.transactionsTableDesktop__cell}>
								<div
									className={styles.transactionsTableDesktop__categoryPill}
									style={{ backgroundColor: row.categoryBg }}
								>
									{row.categoryIcon ? (
										<span
											className={
												styles.transactionsTableDesktop__categoryIcon
											}
										>
											{row.categoryIcon}
										</span>
									) : null}
									<span
										className={styles.transactionsTableDesktop__categoryLabel}
									>
										{row.categoryLabel ?? 'Sem categoria'}
									</span>
								</div>
							</td>
							<td className={styles.transactionsTableDesktop__cell}>
								{row.accountLabel ?? 'Sem conta'}
							</td>
							<td className={styles.transactionsTableDesktop__cell}>
								{row.dateLabel}
							</td>
							<td
								className={`${styles.transactionsTableDesktop__cell} ${styles.transactionsTableDesktop__cellEnd}`}
							>
								{row.valueNumber ? formatCurrency(row.valueNumber) : 'Sem valor'}
							</td>
							<td className={styles.transactionsTableDesktop__cellActions}>
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
