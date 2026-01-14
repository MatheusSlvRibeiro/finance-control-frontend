import { useMediaQuery } from "react-responsive";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import styles from "./ExpenseChart.module.scss";

export function ExpenseChart() {
	const evolutionData = [
		{ month: "Jan", receitas: 4500, despesas: 3200 },
		{ month: "Fev", receitas: 5200, despesas: 3800 },
		{ month: "Mar", receitas: 4800, despesas: 4100 },
		{ month: "Abr", receitas: 6100, despesas: 3500 },
		{ month: "Mai", receitas: 5500, despesas: 4200 },
		{ month: "Jun", receitas: 7200, despesas: 3900 },
	];

	const isMobile = useMediaQuery({ maxWidth: 425 });
	const charHeight = isMobile ? 200 : 300;

	return (
		<div className={styles.dashboard__lineChart}>
			<h3 className={styles.lineChart_title}>Evolução Financeira</h3>
			<div style={{ width: "100%", height: charHeight }}>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={evolutionData}>
						<CartesianGrid />
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Line
							dataKey="receitas"
							name="Receitas"
							stroke="#16a149"
						/>
						<Line
							dataKey="despesas"
							name="Despesas"
							stroke="#dc2828"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
