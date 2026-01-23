import { formatCurrency } from "@utils/formatCurrency";
import styles from "./AccountMetrics.module.scss";

type AccountMetricsProps = {
	label: string;
	id: string;
	value: number;
	className: string;
};

export function AccountMetrics({
	label,
	id,
	value,
	className,
}: AccountMetricsProps) {
	return (
		<div className={styles.amount} key={id}>
			<div className={styles.label}>{label}</div>
			<div
				className={
					styles.accountsCard__metric_amount_value +
					(className ? ` ${className}` : "")
				}
			>
				{formatCurrency(value)}
			</div>
		</div>
	);
}
