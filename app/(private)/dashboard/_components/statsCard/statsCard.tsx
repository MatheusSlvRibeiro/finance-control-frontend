"use client";

import { ArrowRightLeft, Landmark, Minus, Plus } from "lucide-react";
import styles from "./statsCard.module.scss";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { useMediaQuery } from "react-responsive";

export function StatsCard() {
	type StatsLabel = "Contas" | "Receitas" | "Despesas" | "Transferências";

	const classMap: Record<StatsLabel, { card: string; icon: string }> = {
		Contas: {
			card: styles.content_account,
			icon: styles.icon_accounts,
		},
		Receitas: {
			card: styles.content_incomes,
			icon: styles.icon_incomes,
		},
		Despesas: {
			card: styles.content_expenses,
			icon: styles.icon_expenses,
		},
		Transferências: {
			card: styles.content_transfers,
			icon: styles.icon_transfers,
		},
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
		{
			label: "Transferências",
			amount: 0,
			icon: <ArrowRightLeft />,
		},
	];

	const isTablet = useMediaQuery({ minWidth: 576 });

	return (
		<section className={styles.stats_card__container}>
			{isTablet ? (
				""
			) : (
				<p className={styles.stats_card__title}>Visão Geral</p>
			)}

			{stats.map((item) => (
				<div key={item.label} className={classMap[item.label].card}>
					<div className={classMap[item.label].icon}>{item.icon}</div>
					<div className={styles.stats_card__type}>
						<p className={styles.stats_card_label}>{item.label}</p>
						<p className={styles.stats_card_amount}>
							{formatCurrency(item.amount)}
						</p>
					</div>
				</div>
			))}
		</section>
	);
}
