import { ReactNode, useEffect, useMemo, useState } from "react";
import { Transaction } from "@appTypes/transaction";
import styles from "./TransactionsForm.module.scss";
import { Input } from "@components/ui/inputs/baseInput/input";
import { Select } from "@components/ui/select/Select";
import { DateInput } from "@components/ui/inputs/DateInput/DateInput";
import { CurrencyInput } from "@components/ui/inputs/currencyInput/CurrencyInput";
import { useCategories } from "@hooks/useCategories";
import { useAccounts } from "@hooks/useAccounts";

type TransactionFormValues = {
	description: string;
	category: string;
	account: string;
	date: string;
	valueInCents: number;
};

type TransactionFormProps = {
	initialValues?: Partial<Transaction>;
	onSubmit?: (values: TransactionFormValues) => void;
};

type SelectOption = {
	value: string;
	label: string;
	icon?: ReactNode;
};

function findOptionValue(
	options: Array<{ value: string; label: string }>,
	raw?: string,
) {
	if (!raw) return "";

	const byValue = options.find((o) => o.value === raw);
	if (byValue) return byValue.value;

	const byLabel = options.find((o) => o.label === raw);
	return byLabel?.value ?? "";
}

function toDateInputValue(raw?: string) {
	if (!raw) return "";
	if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
	if (/^\d{4}-\d{2}-\d{2}T/.test(raw)) return raw.slice(0, 10);

	const br = raw.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
	if (br) {
		const [, dd, mm, yyyy] = br;
		return `${yyyy}-${mm}-${dd}`;
	}

	return "";
}

export function TransactionForm({
	initialValues,
	onSubmit,
}: TransactionFormProps) {
	const { data: categories } = useCategories();
	const { data: accounts } = useAccounts();

	const categoryOptions: SelectOption[] = useMemo(
		() =>
			categories.map((c) => ({
				value: c.id,
				label: c.name,
				icon: c.icon,
			})),
		[categories],
	);

	const accountOptions: SelectOption[] = useMemo(
		() =>
			accounts.map((a) => ({
				value: a.id,
				label: a.name,
			})),
		[accounts],
	);

	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [account, setAccount] = useState("");
	const [valueInCents, setValueInCents] = useState(0);
	const [date, setDate] = useState("");

	useEffect(() => {
		setDescription(initialValues?.description ?? "");

		const rawCategory =
			(initialValues as any)?.categoryId ??
			(initialValues as any)?.category;
		const rawAccount =
			(initialValues as any)?.accountId ??
			(initialValues as any)?.account;

		setCategory(findOptionValue(categoryOptions, rawCategory));
		setAccount(findOptionValue(accountOptions, rawAccount));

		setDate(toDateInputValue(initialValues?.date));

		setValueInCents(Math.round(((initialValues as any)?.value ?? 0) * 100));
	}, [initialValues, categoryOptions, accountOptions]);

	return (
		<form
			action="submit"
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit?.({
					description,
					category,
					account,
					date,
					valueInCents,
				});
			}}
			className={styles.form}
		>
			<Input
				id="description"
				name="description"
				label="Descrição"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Select
				id="category"
				name="category"
				label="Categoria"
				options={categoryOptions}
				value={category}
				onChange={setCategory}
			/>
			<Select
				id="account"
				name="account"
				label="Conta"
				options={accountOptions}
				value={account}
				onChange={setAccount}
			/>

			<DateInput
				id="date"
				name="date"
				label="Data"
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>

			<CurrencyInput
				id="value"
				name="value"
				label="Valor"
				valueInCents={valueInCents}
				onChangeInCents={setValueInCents}
			/>
		</form>
	);
}
