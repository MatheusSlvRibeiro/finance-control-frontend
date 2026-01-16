import { formatCurrency } from "@utils/formatCurrency";
import styles from "./NetWorth.module.scss";

export default function NetWorth() {
	const netWorth = 6480;

	return (
		<div className={styles.netWorth}>
			<p className={styles.netWorth_label}>
				Patrimônio Total
			</p>
			<p className={styles.netWorth_value}>
				{formatCurrency(netWorth)}
			</p>
		</div>
	);
}
