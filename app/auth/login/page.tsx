"use client";

import { Logo } from "@components/layout/logo/logo";
import styles from "./page.module.scss";
import Link from "next/link";
import LoginForm from "./_components/loginForm/loginForm";

export default function Login() {
	const cards = [
		{
			title: "10k+",
			value: "Usuários ativos",
		},
		{
			title: "R$ 50M",
			value: "Em movimentações financeiras",
		},
		{
			title: "99,9%",
			value: "Disponibilidade da plataforma",
		},
		{
			title: "4.9 ⭐",
			value: "Avaliação média dos usuários",
		},
	];

	return (
		<div className={styles.login__container}>
			<section className={styles.form__section}>
				<div className={styles.login__logo}>
					<Logo />
				</div>

				<div className={styles.login__header}>
					<h1 className={styles.header__title}>Bem vindo de volta</h1>
					<p className={styles.header__subtitle}>
						Entre na sua conta para continuar
					</p>
				</div>

				<LoginForm />

				<p className={styles.login__btn_register}>
					Não tem uma conta?{" "}
					<Link href="/auth/register">
						<span>Criar conta</span>
					</Link>
				</p>
			</section>

			<section className={styles.decorative__section}>
				<div className={styles.decorative__content}>
					<h2 className={styles.decorative__title}>
						Controle total das suas finanças
						<span> em um único lugar</span>
					</h2>

					<p className={styles.decorative__subtitle}>
						Acompanhe receitas, despesas e investimentos em um só
						lugar. Tome decisões financeiras mais inteligentes.
					</p>

					<div className={styles.decorative__card_grid}>
						{cards.map((item) => (
							<div
								key={item.title}
								className={styles.decorative__card}
							>
								<span className={styles.card__title}>
									{item.title}
								</span>
								<p className={styles.card__value}>
									{item.value}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
