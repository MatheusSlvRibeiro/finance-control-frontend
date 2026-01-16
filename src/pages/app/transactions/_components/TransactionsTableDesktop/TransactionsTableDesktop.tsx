import { formatDate } from "@utils/formatDate";
import styles from "./TransactionsTableDesktop.module.scss";
import { formatCurrency } from "@utils/formatCurrency";
import { EllipsisVertical } from "lucide-react";

export function TransactionsTableDesktop() {
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);

	const mockDataTable = [
		{
			id: "1",
			description: "Salário",
			category: "Trabalho",
			categoryColor: "#22c55e",
			type: "income",
			account: "Nubank",
			value: 7500,
			date: formatDate(today),
		},
		{
			id: "2",
			description: "Aluguel",
			category: "Moradia",
			categoryColor: "#ef4444",
			type: "expense",
			account: "Nubank",
			value: 1100,
			date: formatDate(today),
		},
		{
			id: "3",
			description: "Supermercado",
			category: "Alimentação",
			categoryColor: "#f97316",
			type: "expense",
			account: "Nubank",
			value: 450,
			date: formatDate(today),
		},
		{
			id: "4",
			description: "Novaes Ltda.",
			category: "FreeLance",
			categoryColor: "#14b8a6",
			type: "income",
			account: "Nubank",
			value: 1200,
			date: formatDate(today),
		},
		{
			id: "5",
			description: "Internet",
			category: "Serviços",
			categoryColor: "#3b82f6",
			type: "expense",
			account: "Nubank",
			value: 120,
			date: formatDate(yesterday),
		},
		{
			id: "6",
			description: "Academia",
			category: "Saúde",
			categoryColor: "#8b5cf6",
			type: "expense",
			account: "Inter",
			value: 89,
			date: formatDate(yesterday),
		},
		{
			id: "7",
			description: "Spotify",
			category: "Serviços",
			categoryColor: "#3b82f6",
			type: "expense",
			account: "Inter",
			value: 16.9,
			date: formatDate(yesterday),
		},
	];

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
				{mockDataTable.map((item) => (
					<tr 
						key={item.id}>
						<td className={styles.cell}>{item.description}</td>
						<td className={styles.cell}>
							<div
								className={styles.categoryPill}
								style={{
									backgroundColor: item.categoryColor,
								}}
							>
								{item.category}
							</div>
						</td>
						<td className={styles.cell}>{item.account}</td>
						<td className={styles.cell}>{item.date}</td>
						<td className={`${styles.cell} ${styles.cellEnd}`}>
							{formatCurrency(item.value)}
						</td>
						<td className={styles.cellActions}>
							<button
								type="button"
								aria-label={`Abrir ações da transação: ${item.description}`}
							>
								<EllipsisVertical />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
