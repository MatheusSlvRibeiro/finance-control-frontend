import { Logo } from "@components/layout/logo/logo";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Button from "@components/ui/button/button";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<Logo />

				<Link to="/login">
					<Button 
						size="sm"
						variant="login">Entrar</Button>
				</Link>
			</div>
		</header>
	);
}
