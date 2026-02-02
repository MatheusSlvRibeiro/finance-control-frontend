import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@components/ui/button/button'
import { EyeOff, Eye } from 'lucide-react'
import styles from './loginForm.module.scss'
import { useAuth } from '@context/authContext'
import { toast } from 'react-toastify'

type LoginFormState = {
	email: string
	password: string
}

export default function LoginForm() {
	const [values, setValues] = useState<LoginFormState>({
		email: '',
		password: '',
	})
	const [showPassword, setShowPassword] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const navigate = useNavigate()
	const { login } = useAuth()

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target

		setValues((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)

		const result = await login(values.email, values.password)

		if (result.success) {
			toast('Autenticado com sucesso!', {
				toastId: 'login-successfull',
			})
			navigate('/dashboard')
			return
		}

		setError(result.message ?? 'Não foi possível fazer login')
	}

	return (
		<form onSubmit={handleSubmit} className={styles.loginForm__form}>
			<div className={styles.loginForm__box}>
				<div className={styles.loginForm__input}>
					<label htmlFor="email">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						placeholder="seu@email.com"
						required
						onChange={onChange}
						value={values.email}
					/>
				</div>
				<div className={styles.loginForm__input}>
					<label htmlFor="password">Senha</label>
					<div className={styles.loginForm__inputWrapper}>
						<input
							id="password"
							name="password"
							type={showPassword ? 'text' : 'password'}
							placeholder="••••••••"
							autoComplete="current-password"
							required
							onChange={onChange}
							value={values.password}
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

				{error && <p className={styles.error}>{error}</p>}
			</div>
			<Button type="submit" variant="register">
				Entrar
			</Button>
		</form>
	)
}
