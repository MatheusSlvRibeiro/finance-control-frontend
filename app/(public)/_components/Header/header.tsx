import { Logo } from "@components/layout/logo/logo";
import styles from "./header.module.scss";
import Link from "next/link";
import Button from "@components/ui/button/button";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<Logo />

				<Link href="/auth/login">
					<Button variant="login">Entrar</Button>
				</Link>
			</div>
		</header>
	);
}
