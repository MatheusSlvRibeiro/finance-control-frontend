import { Link } from "react-router-dom";
import styles from "./page.module.scss";
import { Logo } from "@components/layout/logo/logo";
import RegisterForm from "./_components/registerForm/registerForm";
import { Check } from "lucide-react";

export default function Register() {
	const benefits = [
		{ text: "Dashboard completo com gráficos" },
		{ text: "Gestão de múltiplas contas" },
		{ text: "Categorização inteligente" },
		{ text: "Relatórios detalhados" },
	];

	return (
		<div className={styles.registerPage__container}>
			<section className={styles.registerPage__section}>
				<div className={styles.registerPage__logo}>
					<Logo />
				</div>

				<div className={styles.registerPage__header}>
					<h1 className={styles.registerPage__headerTitle}>
						Criar Conta
					</h1>
					<p className={styles.registerPage__headerSubtitle}>
						Preencha os dados abaixo para começar
					</p>
				</div>

				<RegisterForm />

				<p className={styles.registerPage__btn}>
					Já tem conta?{" "}
					<Link to="/login">
						<span>Entrar</span>
					</Link>
				</p>
			</section>
			<section className={styles.registerPage__decorativeSection}>
				<div className={styles.registerPage__decorativeContent}>
					<h2 className={styles.registerPage__decorativeTitle}>
						Comece sua jornada financeira
					</h2>

					<p className={styles.registerPage__decorativeSubtitle}>
						Crie sua conta gratuita e tenha acesso a todas as
						ferramentas para organizar suas finanças pessoais.
					</p>

					<div className={styles.registerPage__decorativeBenefits}>
						{benefits.map((item) => (
							<div
								className={
									styles.registerPage__decorativeBenefitsItem
								}
								key={item.text}
							>
								<Check />
								<p>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
