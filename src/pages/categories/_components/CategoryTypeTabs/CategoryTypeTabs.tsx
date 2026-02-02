import type { CategoryType } from '@appTypes/category'
import { Minus, Plus } from 'lucide-react'
import styles from './CategoryTypeTabs.module.scss'

type CategoryTypeTabsProps = {
	value: CategoryType
	onChange: (next: CategoryType) => void
}

export function CategoryTypeTabs({ value, onChange }: CategoryTypeTabsProps) {
	return (
		<nav className={styles.navbar}>
			<button
				type="button"
				className={`${styles.navbarButton} ${
					value === 'income' ? styles.navbarButtonActiveIncome : ''
				}`}
				onClick={() => onChange('income')}
			>
				<Plus className={styles.incomeIcon} />
				Receitas
			</button>
			<button
				type="button"
				className={`${styles.navbarButton} ${
					value === 'expense' ? styles.navbarButtonActiveExpense : ''
				}`}
				onClick={() => onChange('expense')}
			>
				<Minus className={styles.expenseIcon} />
				Despesas
			</button>
		</nav>
	)
}
