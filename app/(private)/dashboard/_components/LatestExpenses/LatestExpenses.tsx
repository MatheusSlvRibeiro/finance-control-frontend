"use client";

import Link from "next/link";
import styles from "./LatestExpenses.module.scss";
import { useMediaQuery } from "react-responsive";
import { LatestExpensesMobile } from "./_components/LatestExpensesMobile/LatestExpensesMobile";
import { LatestExpensesDesktop } from "./_components/LatestExpensesDesktop/LatestExpensesDesktop";

export function LatestExpenses() {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	return (
		<div className={styles.table__container}>
			<div className={styles.container__header}>
				<h3 className={styles.header__title}>Transações Recentes</h3>

				<Link className={styles.header__button} href="/transactions">
					Ver todas
				</Link>
			</div>

			{isMobile ? <LatestExpensesMobile /> : <LatestExpensesDesktop />}
		</div>
	);
}
