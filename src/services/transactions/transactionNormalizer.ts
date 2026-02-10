import type { Transaction } from '@appTypes/transaction';

type NormalizedTransaction = Transaction & {
	dateFormatted?: string;
};

const MONTHS_SHORT_PT = [
	'jan',
	'fev',
	'mar',
	'abr',
	'mai',
	'jun',
	'jul',
	'ago',
	'set',
	'out',
	'nov',
	'dez',
];

function safeParseDate(value?: string): Date | null {
	if (!value) return null;

	const parsed = new Date(value);
	if (!Number.isNaN(parsed.getTime())) return parsed;

	const ymd = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
	if (ymd) {
		const [, y, m, d] = ymd;
		const asDate = new Date(Number(y), Number(m) - 1, Number(d));
		return Number.isNaN(asDate.getTime()) ? null : asDate;
	}

	return null;
}

export function formatDateDayMonthPt(dateString?: string): string {
	const date = safeParseDate(dateString);
	if (!date) return '';

	const day = String(date.getDate()).padStart(2, '0');
	const month = MONTHS_SHORT_PT[date.getMonth()] ?? '';
	return month ? `${day}/${month}` : '';
}

export function normalizeTransaction(transaction: Transaction): NormalizedTransaction {
	return {
		...transaction,
		dateFormatted: formatDateDayMonthPt(transaction.date),
	};
}

export function normalizeTransactions(transactions: Transaction[]): NormalizedTransaction[] {
	return transactions.map(normalizeTransaction);
}
