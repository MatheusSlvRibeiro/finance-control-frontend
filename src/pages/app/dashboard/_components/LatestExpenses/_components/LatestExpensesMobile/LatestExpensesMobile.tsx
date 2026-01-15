import { formatCurrency } from "../../../../../../../utils/formatCurrency";
import { formatDate } from "../../../../../../../utils/formatDate";
import styles from "./LatestExpensesMobile.module.scss";

export function LatestExpensesMobile() {
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
		<table className={styles.expenses_table__mobile}>
			<tbody>
				{recentExpenses.map((item) => (
					<tr className={styles.expenses_table__row} key={item.id}>
						<td className={styles.expenses_table__Cell}>
							<div
								style={{
									width: "15px",
									height: 15,
									borderRadius: "50%",
									backgroundColor: item.categoryColor,
								}}
							></div>
							<div>
								<div
									className={
										styles.expenses_table__description
									}
								>
									{item.description}
								</div>
								<div className={styles.expenses_table__account}>
									{item.account}
								</div>
							</div>
						</td>

						<td className={styles.expenses_table__Cell}>
							<div>
								<div className={styles.expenses_table__amount}>
									{formatCurrency(item.amount)}
								</div>
								<div className={styles.expenses_table__date}>
									{item.date}
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
