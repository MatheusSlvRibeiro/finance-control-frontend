import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ToastContainer position="top-right" autoClose={2000} />
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>,
);
