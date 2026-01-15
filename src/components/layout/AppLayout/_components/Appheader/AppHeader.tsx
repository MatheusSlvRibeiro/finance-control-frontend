import { useMediaQuery } from "react-responsive";
import styles from "./AppHeader.module.scss";
import { Menu, UserRound, X } from "lucide-react";
import { Logo } from "@components/layout/logo/logo";

interface HeaderProps {
	onMenuClick?: () => void;
	sidebarOpen?: boolean;
}

const userMock = {
	name: "João Silva",
	email: "joao@email.com",
	avatar: <UserRound />,
};

export default function AppHeader({ onMenuClick, sidebarOpen }: HeaderProps) {
	const isMobile = useMediaQuery({ maxWidth: 992 });

	return (
		<header
			className={
				isMobile ? styles.header__Mobile : styles.header__Desktop
			}
		>
			{isMobile && (
				<button
					className={styles.mobile__menu}
					onClick={onMenuClick}
					aria-label={sidebarOpen ? "Close menu" : "Open menu"}
				>
					{sidebarOpen ? <X /> : <Menu />}
				</button>
			)}

			<Logo />

			<div className={styles.user__content}>
				<div className={styles.user__info}>
					<p className={styles.user__name}>{userMock.name}</p>
					<span className={styles.user__email}>{userMock.email}</span>
				</div>

				<div className={styles.user__avatar}>{userMock.avatar}</div>
			</div>
		</header>
	);
}
