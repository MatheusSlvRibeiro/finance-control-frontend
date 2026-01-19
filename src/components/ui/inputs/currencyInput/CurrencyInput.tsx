import { Input } from "@components/ui/inputs/baseInput/input";
import { formatCurrency } from "@utils/formatCurrency";

type CurrencyInputProps = {
	id: string;
	name: string;
	label?: string;

	valueInCents: number;
	onChangeInCents: (next: number) => void;

	disabled?: boolean;
	placeholder?: string;
};

function stripCurrencySymbol(formatted: string) {
	return formatted.replace(/^R\$\s?/, "");
}

export function CurrencyInput({
	id,
	name,
	label,
	valueInCents,
	onChangeInCents,
	disabled,
	placeholder = "0,00",
}: CurrencyInputProps) {
	const displayValue = stripCurrencySymbol(
		formatCurrency(valueInCents / 100),
	);

	return (
		<Input
			id={id}
			name={name}
			label={label}
			prefix="R$"
			type="text"
			inputMode="numeric"
			placeholder={placeholder}
			disabled={disabled}
			value={displayValue}
			onChange={(e) => {
				const digitsOnly = e.target.value.replace(/\D/g, "");
				const nextCents = digitsOnly ? Number(digitsOnly) : 0;
				onChangeInCents(nextCents);
			}}
		/>
	);
}
