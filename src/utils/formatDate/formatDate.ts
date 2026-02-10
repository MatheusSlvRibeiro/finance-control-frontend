const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

export function formatDate(date: string): string {
	try {
		const cleanDate = date?.split('.')[0] + 'Z';
		const d = new Date(cleanDate);
		if (isNaN(d.getTime())) return 'Data inválida';

		const day = d.toLocaleDateString('pt-BR', { day: '2-digit' });
		const month = d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
		return `${day}/${month}`;
	} catch {
		return 'Data inválida';
	}
}
