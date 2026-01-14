import { formatCurrency } from "@utils/formatCurrency";
import { Pie, ResponsiveContainer, PieChart, Tooltip, Cell } from "recharts";
import styles from "./CategoryChart.module.scss";

export function CategoryChart() {
	const categoryData = [
		{ name: "Alimentação", value: 1200, color: "#10b981" },
		{ name: "Transporte", value: 800, color: "#3b82f6" },
		{ name: "Moradia", value: 2000, color: "#8b5cf6" },
		{ name: "Lazer", value: 600, color: "#f59e0b" },
	];

	return (
		<div className={styles.dashboard__pieChart}>
			<h3 className={styles.pieChart_title}>Despesas por Categoria</h3>
			<div className={styles.dashboard__pieChart_content}>
				<div className={styles.piechart}>
					<ResponsiveContainer>
						<PieChart>
							<Pie
								dataKey="value"
								data={categoryData}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={100}
								paddingAngle={2}
							>
								{categoryData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={entry.color}
									/>
								))}
							</Pie>
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</div>
				<div>
					{categoryData.map((item) => (
						<div
							key={item.name}
							className={styles.piechart__infoList}
						>
							<div className={styles.piechart__category}>
								<div
									className={styles.piechart__dotlist}
									style={{
										backgroundColor: item.color,
									}}
								></div>
								<span className={styles.piechart__info_type}>
									{item.name}
								</span>
							</div>
							<span className={styles.piechart__info_value}>
								{formatCurrency(item.value)}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
