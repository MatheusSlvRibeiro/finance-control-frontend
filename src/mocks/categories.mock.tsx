import {
	Home,
	Briefcase,
	Bus,
	HeartPulse,
	Laptop,
	PartyPopper,
	TrendingUp,
	Utensils,
	Wrench,
} from 'lucide-react';
import type { Category } from '@appTypes/category';

export const categories: Category[] = [
	{
		id: 'work',
		name: 'Trabalho',
		type: 'income',
		color: '#4CAF50',
		icon: <Briefcase size={18} />,
	},
	{
		id: 'investments',
		name: 'Investimentos',
		type: 'income',
		color: '#2E7D32',
		icon: <TrendingUp size={18} />,
	},
	{
		id: 'freelance',
		name: 'Freelance',
		type: 'income',
		color: '#388E3C',
		icon: <Laptop size={18} />,
	},
	{
		id: 'home',
		name: 'Moradia',
		type: 'expense',
		color: '#1976D2',
		icon: <Home size={18} />,
	},
	{
		id: 'food',
		name: 'Alimentação',
		type: 'expense',
		color: '#F57C00',
		icon: <Utensils size={18} />,
	},
	{
		id: 'transport',
		name: 'Transporte',
		type: 'expense',
		color: '#5D4037',
		icon: <Bus size={18} />,
	},
	{
		id: 'services',
		name: 'Serviços',
		type: 'expense',
		color: '#616161',
		icon: <Wrench size={18} />,
	},
	{
		id: 'healthy',
		name: 'Saúde',
		type: 'expense',
		color: '#C62828',
		icon: <HeartPulse size={18} />,
	},
	{
		id: 'leisure',
		name: 'Lazer',
		type: 'expense',
		color: '#6A1B9A',
		icon: <PartyPopper size={18} />,
	},
] satisfies Category[];
