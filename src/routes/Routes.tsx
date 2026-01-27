import AppLayout from "@components/layout/AppLayout/AppLayout";
import AccountsPage from "@pages/app/accounts/AccountsPage";
import CategoriesPage from "@pages/app/categories/CategoriesPage";
import Dashboard from "@pages/app/dashboard/Dashboard";
import TransactionsPage from "@pages/app/transactions/TransactionsPage";
import Login from "@pages/auth/login/page";
import Register from "@pages/auth/register/page";
import Landing from "@pages/Landing/Landing";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import { useAuth } from "@context/authContext";

export function ProtectedRoute() {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
}

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<ProtectedRoute />}>
					<Route element={<AppLayout />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/accounts" element={<AccountsPage />} />
						<Route
							path="/transactions"
							element={<TransactionsPage />}
						/>
						<Route
							path="/categories"
							element={<CategoriesPage />}
						/>
					</Route>
				</Route>

				<Route path="/*" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
}
