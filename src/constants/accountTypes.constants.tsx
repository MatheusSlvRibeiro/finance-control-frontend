import { Building2, PiggyBank, Wallet } from 'lucide-react'

export const ACCOUNT_TYPE_OPTIONS = {
	checking: {
		label: 'Conta corrente',
		icon: Building2,
	},
	savings: {
		label: 'Poupança',
		icon: PiggyBank,
	},
	wallet: {
		label: 'Carteira',
		icon: Wallet,
	},
} as const

export const ACCOUNT_TYPE_OPTIONS_ARRAY = Object.entries(ACCOUNT_TYPE_OPTIONS).map(
  ([value, { label, icon: Icon }]) => ({
    value,
    label,
    icon: <Icon />,
  })
)