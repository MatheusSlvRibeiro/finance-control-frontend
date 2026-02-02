import { Logo } from '@components/layout/logo/logo'
import styles from './page.module.scss'
import { Link } from 'react-router-dom'
import LoginForm from './_components/loginForm/loginForm'

export default function Login() {
	const cards = [
		{
			title: '10k+',
			value: 'Usuários ativos',
		},
		{
			title: 'R$ 50M',
			value: 'Em movimentações financeiras',
		},
		{
			title: '99,9%',
			value: 'Disponibilidade da plataforma',
		},
		{
			title: '4.9 ⭐',
			value: 'Avaliação média dos usuários',
		},
	]

	return (
		<div className={styles.loginPage__container}>
			<section className={styles.loginPage__section}>
				<div className={styles.loginPage__logo}>
					<Logo />
				</div>

				<div className={styles.loginPage__header}>
					<h1 className={styles.loginPage__headerTitle}>Bem-vindo de volta</h1>
					<p className={styles.loginPage__headerSubtitle}>
						Entre na sua conta para continuar
					</p>
				</div>

				<LoginForm />

				<p className={styles.loginPage__btnRegister}>
					Não tem uma conta?{' '}
					<Link to="/register">
						<span>Criar conta</span>
					</Link>
				</p>
			</section>

			<section className={styles.loginPage__decorativeSection}>
				<div className={styles.loginPage__decorativeContent}>
					<h2 className={styles.loginPage__decorativeTitle}>
						Controle total das suas finanças
						<span> em um único lugar</span>
					</h2>

					<p className={styles.loginPage__decorativeSubtitle}>
						Acompanhe receitas, despesas e investimentos em um só lugar. Tome decisões
						financeiras mais inteligentes.
					</p>

					<div className={styles.loginPage__decorativeCardGrid}>
						{cards.map((item) => (
							<div key={item.title} className={styles.loginPage__decorativeCard}>
								<span className={styles.loginPage__cardTitle}>{item.title}</span>
								<p className={styles.loginPage__cardValue}>{item.value}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
