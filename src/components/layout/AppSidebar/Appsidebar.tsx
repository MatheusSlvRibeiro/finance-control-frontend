import {
	Banknote,
	Landmark,
	LayoutDashboardIcon,
	SquareChartGantt,
} from "lucide-react";
import styles from "./Appsidebar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface Sidebar {
	open?: boolean;
	onClose?: () => void;
}

interface MenuItem {
	name: string;
	path: string;
	icon: React.ElementType;
}

export default function AppSidebar({ open, onClose }: Sidebar) {
	const navigate = useNavigate();
	const location = useLocation();

	const navitems = [
		{
			icon: <LayoutDashboardIcon />,
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			icon: <Landmark />,
			name: "Contas",
			path: "/accounts",
		},
		{
			icon: <Banknote />,
			name: "Transações",
			path: "/transactions",
		},
		{
			icon: <SquareChartGantt />,
			name: "Categorias",
			path: "/categories",
		},
	];

	const isActive = (path: string) => location.pathname === path;

	const handleNavigate = async (path: string) => {
		navigate(path);
	};

	return (
		<nav
			className={
				open
					? styles.sidebar__container
					: styles.sidebar__container_closed
			}
		>
			<ul className={styles.sidebar__list}>
				{navitems.map(({ name, path, icon: icon }) => {
					return (
						<li
							key={name}
							onClick={() => {
								handleNavigate(path);
								if (onClose) onClose();
							}}
						>
							<NavLink
								to={path}
								className={ ({ isActive }) =>
									isActive
										? styles.sidebar__item_active
										: styles.sidebar__item
								}
								onClick={() => {
									if (onClose) onClose();
								}}
							>
								<div className={styles.sidebar__item_icon}>
									{icon}
								</div>
								<span className={styles.sidebar__item_name}>
									{name}
								</span>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
