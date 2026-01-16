import { useMediaQuery } from "react-responsive";
import styles from "./TransactionsTable.module.scss";
import { TransactionsTableMobile } from "./TransactionsTableMobile/TransactionsTableMobile";
import { TransactionsTableDesktop } from "./TransactionsTableDesktop/TransactionsTableDesktop";

export function TransactionsTable() {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	return (
		<div className={styles.transactionsTable__container}>
			
			{isMobile ? <TransactionsTableMobile /> : <TransactionsTableDesktop />}
		</div>
	);
}
