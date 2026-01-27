import { formatCurrency } from "@utils/formatCurrency";
import { useAccountsTotals } from "@hooks/useAccountsTotals";
import styles from "./NetWorth.module.scss";

export default function NetWorth() {
	const { balance } = useAccountsTotals();

	return (
		<div className={styles.netWorth}>
			<p className={styles.netWorth__label}>Patrimônio Total</p>
			<p className={styles.netWorth__value}>{formatCurrency(balance)}</p>
		</div>
	);
}
