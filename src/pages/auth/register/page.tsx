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
		<div className={styles.register__container}>
			<section className={styles.register__section}>
				<div className={styles.register__logo}>
					<Logo />
				</div>

				<div className={styles.register__header}>
					<h1 className={styles.register__header_title}>
						Criar Conta
					</h1>
					<p className={styles.register__header_subtitle}>
						Preencha os dados abaixo para começar
					</p>
				</div>

				<RegisterForm />

				<p className={styles.register__btn}>
					Já tem conta?{" "}
					<Link to="/login">
						<span>Entrar</span>
					</Link>
				</p>
			</section>
			<section className={styles.decorative__section}>
				<div className={styles.decorative__content}>
					<h2 className={styles.decorative__title}>
						Comece sua jornada financeira
					</h2>

					<p className={styles.decorative__subtitle}>
						Crie sua conta gratuita e tenha acesso a todas as
						ferramentas para organizar sus finanças pessoais.
					</p>

					<div className={styles.decorative__benefits}>
						{benefits.map((item) => (
							<div
								className={styles.decorative__benefits_items}
								key={item.text}
							>
								<Check className={styles.benefits__check} />
								<p className={styles.benefits__text}>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
