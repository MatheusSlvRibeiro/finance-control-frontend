"use client";

import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import styles from "./page.module.scss";
import { StatsCard } from "./_components/statsCard/statsCard";
import { ExpenseChart } from "./_components/ExpenseChart/ExpenseChart";
import { CategoryChart } from "./_components/CategoryChart/CategoryChart";
import { LatestExpenses } from "./_components/LatestExpenses/LatestExpenses";

export default function Dashboard() {
	return (
		<div className={styles.dashboard__container}>
			<PageHeader
				title="Dashboard"
				subtitle="Visão geral das suas finanças"
			/>

			<StatsCard />

			<section className={styles.dashboard_charts__container}>
				<ExpenseChart />

				<CategoryChart />
			</section>

			<section>
				<LatestExpenses />
			</section>
		</div>
	);
}
