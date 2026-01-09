"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { Logo } from "@components/layout/logo/logo";
import RegisterForm from "./_components/registerForm/registerForm";

export default function Register() {

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
					<Link href="/auth/login">
						<span>Entrar</span>
					</Link>
				</p>
			</section>
		</div>
	);
}
