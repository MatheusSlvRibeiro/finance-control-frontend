import { Wallet } from "lucide-react";
import styles from "./logo.module.scss";

export function Logo() {
	return (
		<div className={styles.logo}>
			<div>
				<Wallet />
			</div>
			<span className={styles.name}>Finance Control</span>
		</div>
	);
}
