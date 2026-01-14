import { EllipsisVertical } from "lucide-react";
import styles from "./LatestExpensesDesktop.module.scss";
import { formatCurrency } from "@utils/formatCurrency";
import { formatDate } from "@utils/formatDate";

export function LatestExpensesDesktop() {
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);

	const recentExpenses = [
		{
			id: 1,
			description: "Supermercado Extra",
			categoryColor: "#f97316",
			account: "Minha conta corrente",
			amount: 245.5,
			date: formatDate(today),
		},
		{
			id: 2,
			description: "Farmácia Drogasil",
			categoryColor: "#8b5cf6",
			account: "Minha conta corrente",
			amount: 120.0,
			date: formatDate(yesterday),
		},
		{
			id: 3,
			description: "Uber",
			categoryColor: "#eab308",
			account: "Minha conta corrente",
			amount: 32.9,
			date: formatDate(yesterday),
		},
		{
			id: 4,
			description: "Netflix",
			categoryColor: "#3b82f6",
			account: "Minha conta corrente",
			amount: 55.9,
			date: formatDate(yesterday),
		},
		{
			id: 5,
			description: "Restaurante",
			categoryColor: "#f97316",
			account: "Minha conta corrente",
			amount: 80.0,
			date: formatDate(yesterday),
		},
	];

	return (
		<table className={styles.expense_table__desktop}>
			<thead className={styles.expense_table__head}>
				<tr className={styles.expense_table__head_row}>
					<th>Descrição</th>
					<th>Contas</th>
					<th >Lançamento</th>
					<th className={styles.expense_table__head_amount}>Valor</th>
					<th className={styles.expense_table__head_actions}>
						Ações
					</th>
				</tr>
			</thead>
			<tbody className={styles.expense_table__body}>
				{recentExpenses.map((item) => (
					<tr
						className={styles.expense_table__body_row}
						key={item.id}
					>
						<td className={styles.expense_table__body_description}>
							<div
								style={{
									width: "15px",
									height: 15,
									borderRadius: "50%",
									backgroundColor: item.categoryColor,
								}}
							></div>
							<div>{item.description}</div>
						</td>
						<td className={styles.expense_table__body_cell}>
							{item.account}
						</td>
						<td className={styles.expense_table__body_cell_center}>
							{item.date}
						</td>
						<td className={styles.expense_table__body_cell_end}>
							{formatCurrency(item.amount)}
						</td>
						<td
							className={styles.expense_table__body_action_button}
						>
							<EllipsisVertical />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
