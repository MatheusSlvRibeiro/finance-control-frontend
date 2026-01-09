import Button from "@components/ui/button/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./registerForm.module.scss";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const router = useRouter();

	const passwordRequirements = [
		{ label: "Mínimo 8 caracteres", passed: formData.password.length >= 8 },
		{
			label: "Uma letra maiúscula",
			passed: /[A-Z]/.test(formData.password),
		},
		{ label: "Um número", passed: /[0-9]/.test(formData.password) },
		{
			label: "Um caractere especial",
			passed: /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(formData.password),
		},
	];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			return;
		}
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			router.push("/dashboard");
		}, 1000);
	};

	return (
		<form
			onSubmit={handleSubmit}
			action="submit"
			className={styles.register__form}
		>
			<div className={styles.register__form_box}>
				<div className={styles.register__form_input}>
					<label htmlFor="name">Nome completo</label>
					<input
						id="name"
						type="text"
						value={formData.name}
						onChange={(e) =>
							setFormData({ ...formData, name: e.target.value })
						}
						placeholder="Seu nome completo"
						required
					/>
				</div>

				<div className={styles.register__form_input}>
					<label htmlFor="email">E-mail</label>
					<input
						id="email"
						type="email"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						placeholder="seu@email.com"
						required
					/>
				</div>

				<div className={styles.register__form_input}>
					<label htmlFor="password">Senha</label>
					<div className={styles.input__wrapper}>
						<input
							id="password"
							value={formData.password}
							onChange={(e) =>
								setFormData({
									...formData,
									password: e.target.value,
								})
							}
							type={showPassword ? "text" : "password"}
							placeholder="******"
							required
						/>
						<button
							className={styles.show_password}
							type="button"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <EyeOff /> : <Eye />}
						</button>
					</div>

					<div className={styles.password__status}>
						{passwordRequirements.map((req, item) => (
							<span
								key={item}
								className={
									req.passed
										? styles.password__passed
										: styles.password__muted
								}
							>
								{req.passed}
								{req.label}
							</span>
						))}
					</div>
				</div>

				<div className={styles.register__form_input}>
					<label htmlFor="confirmPassword">Confirmar senha</label>
					<div className={styles.input__wrapper}>
						<input
							id="confirmPassword"
							value={formData.confirmPassword}
							onChange={(e) =>
								setFormData({
									...formData,
									confirmPassword: e.target.value,
								})
							}
							type={showConfirmPassword ? "text" : "password"}
							placeholder="******"
							required
						/>
						<button
							className={styles.show_password}
							type="button"
							onClick={() =>
								setShowConfirmPassword(!showConfirmPassword)
							}
						>
							{showConfirmPassword ? <EyeOff /> : <Eye />}
						</button>
					</div>
					{formData.confirmPassword &&
						formData.password !== formData.confirmPassword && (
							<p className={styles.password__error}>
								As senhas não coincidem
							</p>
						)}
				</div>
			</div>
			<Button
				type="submit"
				variant="register"
				disabled={
					isLoading || formData.password !== formData.confirmPassword
				}
			>
				{isLoading ? "Criando conta" : "Criar conta"}
			</Button>
		</form>
	);
}
