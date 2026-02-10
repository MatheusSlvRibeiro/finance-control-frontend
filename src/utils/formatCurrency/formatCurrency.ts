export const formatCurrency = (value: number | null | undefined) =>
	`R$ ${(Number(value) || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
