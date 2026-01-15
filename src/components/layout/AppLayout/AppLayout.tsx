import { Outlet, useNavigate } from "react-router-dom";
import AppHeader from "@components/layout/AppLayout/_components/Appheader/AppHeader";
import AppSidebar from "@components/layout/AppLayout/_components/AppSidebar/Appsidebar";
import styles from "@components/layout/AppLayout/AppLayout.module.scss";
import { useEffect, useState } from "react";

export default function AppLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const handleSidebarToggle = () => setSidebarOpen((open) => !open);
	const handleSidebarClose = () => setSidebarOpen(false);
	const isAuthenticated = true;
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/");
		}
	});

	return (
		<div className={styles.applayout__container}>
			<AppHeader
				onMenuClick={handleSidebarToggle}
				sidebarOpen={sidebarOpen}
			/>
			<AppSidebar open={sidebarOpen} onClose={handleSidebarClose} />

			<div className={styles.applayout__main_content}>
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
