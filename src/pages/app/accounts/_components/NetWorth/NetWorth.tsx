import { formatCurrency } from "@utils/formatCurrency";
import { useAccountsTotals } from "@hooks/useAccountsTotals";
import styles from "./NetWorth.module.scss";

export default function NetWorth() {
	const { balance } = useAccountsTotals();

	return (
		<div className={styles.netWorth}>
			<p className={styles.netWorth_label}>Patrimônio Total</p>
			<p className={styles.netWorth_value}>{formatCurrency(balance)}</p>
		</div>
	);
}
