import { Landmark, Minus, Plus } from "lucide-react";
import IMask from "imask";
import styles from "./statsCard.module.scss";
import { formatCurrency } from "../../../../../utils/formatCurrency";

export function StatsCard() {
	type StatsLabel = "Contas" | "Receitas" | "Despesas";

	const iconsClassMap: Record<StatsLabel, string> = {
		Contas: styles.icon_accounts,
		Receitas: styles.icon_incomes,
		Despesas: styles.icon_expenses,
	};

	const stats: { label: StatsLabel; amount: number; icon: JSX.Element }[] = [
		{
			label: "Contas",
			amount: 12450,
			icon: <Landmark />,
		},
		{
			label: "Receitas",
			amount: 8200,
			icon: <Plus />,
		},
		{
			label: "Despesas",
			amount: 3750,
			icon: <Minus />,
		},
	];

	return (
		<section className={styles.stats_card__container}>

			<p className={styles.stats_card__title}>Visão Geral</p>

			{stats.map((item) => (
				<div key={item.label} className={styles.stats_card__content}>
					<div className={styles.stats_card__type}>
						<div className={iconsClassMap[item.label]}>
							{item.icon}
						</div>
						<p className={styles.stats_card_label}>{item.label}</p>
					</div>
					<p className={styles.stats_card_amount}>
						{formatCurrency(item.amount)}
					</p>
				</div>
			))}
		</section>
	);
}
