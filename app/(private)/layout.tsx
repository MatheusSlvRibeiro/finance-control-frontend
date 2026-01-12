"use client";

import AppHeader from "@components/layout/Appheader/AppHeader";
import AppSidebar from "@components/layout/AppSidebar/Appsidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const isAuthenticated = true;

export default function PrivateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isMobile = useMediaQuery({ maxWidth: 992 });
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const router = useRouter();

	const handleSidebarToggle = () => setSidebarOpen((open) => !open);
	const handleSidebarClose = () => setSidebarOpen(false);

	useEffect(() => {
		if (!isAuthenticated) {
			router.replace("/");
		}
	});

	if (!isAuthenticated) return null;

	return (
		<>
			<AppHeader
				onMenuClick={handleSidebarToggle}
				sidebarOpen={sidebarOpen}
			/>
			<AppSidebar open={sidebarOpen} onClose={handleSidebarClose} />
			<main style={isMobile 
				? {} 
				: {
					marginLeft: 200
				}}>{children}</main>
		</>
	);
}
