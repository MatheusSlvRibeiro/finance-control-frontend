import { useState } from "react";
import styles from "./loginForm.module.scss";
import { EyeOff, Eye } from "lucide-react";
import Button from "@components/ui/button/button";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<form action="/dashboard" className={styles.login__form}>
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
							placeholder="*******"
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
			<Button variant="register">Entrar</Button>
		</form>
	);
}
