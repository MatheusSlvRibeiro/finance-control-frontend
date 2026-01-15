const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

export const formatDate = (date: Date) => {
	const day = date.toLocaleDateString("pt-BR", { day: "2-digit" });
	const month = date.toLocaleDateString("pt-BR", { month: "short" });
	return `${day}/${month}`;
};
