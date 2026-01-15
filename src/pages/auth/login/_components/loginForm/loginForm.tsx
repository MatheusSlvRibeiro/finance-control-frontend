import { useState } from "react";
import Button from "@components/ui/button/button";
import { EyeOff, Eye } from "lucide-react";
import styles from "./loginForm.module.scss";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setTimeout(() => {
			navigate("/dashboard");
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit} className={styles.login__form}>
			<div className={styles.login__form_box}>
				<div className={styles.login__form_input}>
					<label htmlFor="email">E-mail</label>
					<input
						id="email"
						type="email"
						placeholder="seu@email.com"
						required
					/>
				</div>
				<div className={styles.login__form_input}>
					<label htmlFor="password">Senha</label>
					<div className={styles.input__wrapper}>
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="••••••••"
							autoComplete="current-password"
							required
						/>
						<button
							className={styles.show__password}
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							tabIndex={-1}
						>
							{showPassword ? <EyeOff /> : <Eye />}
						</button>
					</div>
				</div>
			</div>
			<Button type="submit" variant="register">
				Entrar
			</Button>
		</form>
	);
}
