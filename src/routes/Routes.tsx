import AppLayout from "@components/layout/AppLayout/AppLayout";
import AccountsPage from "@pages/app/accounts/AccountsPage";
import CategoriesPage from "@pages/app/categories/CategoriesPage";
import Dashboard from "@pages/app/dashboard/Dashboard";
import TransactionsPage from "@pages/app/transactions/TransactionsPage";
import Login from "@pages/auth/login/page";
import Register from "@pages/auth/register/page";
import Home from "@pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<AppLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/accounts" element={<AccountsPage />} />
					<Route
						path="/transactions"
						element={<TransactionsPage />}
					/>
					<Route path="/Categories" element={<CategoriesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
