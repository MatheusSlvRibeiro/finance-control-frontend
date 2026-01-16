import { formatCurrency } from "@utils/formatCurrency";
import styles from "./AccountsCard.module.scss";
import {
	Building2,
	EllipsisVertical,
	PiggyBank,
	Wallet,
} from "lucide-react";
import type { RowId, Account } from "./accountCardType";

export default function AccountsCard() {
	const userAccounts = [
		{
			icon: <Building2 />,
			name: "Nubank",
			type: "Conta corrente",
			openingBalance: 5000,
			incomes: 500,
			incomingTransfer: 0,
			outgoingTransfers: 100,
			expenses: 50,
			balance: 5350,
		},
		{
			icon: <PiggyBank />,
			name: "Inter",
			type: "Poupança",
			openingBalance: 500,
			incomes: 500,
			incomingTransfer: 100,
			outgoingTransfers: 0,
			expenses: 1100,
			balance: 0,
		},
		{
			icon: <Wallet />,
			name: "Carteira",
			type: "Carteira",
			openingBalance: 100,
			incomes: 300,
			incomingTransfer: 0,
			outgoingTransfers: 0,
			expenses: 70,
			balance: 330,
		},
	];

	const rows = [
		{
			id: "openingBalance",
			label: "Saldo inicial",
			getValue: (acc: Account) => acc.openingBalance,
		},
		{
			id: "incomes",
			label: "Receitas",
			getValue: (acc: Account) => acc.incomes,
		},
		{
			id: "incomingTransfer",
			label: "Transf. creditadas",
			getValue: (acc: Account) => acc.incomingTransfer,
		},
		{
			id: "outgoingTransfers",
			label: "Transf. debitadas",
			getValue: (acc: Account) => acc.outgoingTransfers,
		},
		{
			id: "expenses",
			label: "Despesas",
			getValue: (acc: Account) => acc.expenses,
		},
		{
			id: "currentBalance",
			label: "Saldo atual",
			getValue: (acc: Account) => acc.balance,
		},
	] satisfies Array<{
		id: RowId;
		label: string;
		getValue: (acc: Account) => number;
	}>;

	type RowKind = "default" | "income" | "expense" | "balance";

	const ROW_KIND: Record<RowId, RowKind> = {
		openingBalance: "balance",
		incomes: "income",
		incomingTransfer: "income",
		outgoingTransfers: "expense",
		expenses: "expense",
		currentBalance: "balance",
	};

	const getAmountClassName = (rowId: RowId, value: number) => {
		const kind = ROW_KIND[rowId];

		if (value === 0) return styles.amountDefault;

		if (kind === "income") return styles.amountIncome;
		if (kind === "expense") return styles.amountExpense;

		if (kind === "balance") {
			return value > 0 ? styles.amountIncome : styles.amountExpense;
		}

		return "";
	};

	const currentBalanceRow = rows.find((row) => row.id === "currentBalance");
	const metricRows = rows.filter((row) => row.id !== "currentBalance");

	return (
		<div className={styles.accountsCard__grid}>
			{userAccounts.map((item) => (
				<div className={styles.accountsCard} key={item.name}>
					<div className={styles.accountsCard__header}>
						<div className={styles.accountsCard__header}>
							<div className={styles.accountsCard__header_icon}>
								{item.icon}
							</div>

							<div>
								<div
									className={styles.accountsCard__header_name}
								>
									{item.name}
								</div>
								<div
									className={styles.accountsCard__header_type}
								>
									{item.type}
								</div>
							</div>
						</div>

						<div>
							<button
								className={
									styles.accountsCard__header_icon_edit
								}
							>
								<EllipsisVertical />
							</button>
						</div>
					</div>

					<div className={styles.accountsCard__metrics}>
						{metricRows.map((row) => {
							const value = row.getValue(item);
							const amountClassName = getAmountClassName(
								row.id,
								value
							);

							return (
								<div
									className={
										styles.accountsCard__metric_amount
									}
									key={row.id}
								>
									<div
										className={
											styles.accountsCard__metric_amount_label
										}
									>
										{row.label}
									</div>
									<div
										className={
											styles.accountsCard__metric_amount_value +
											(amountClassName
												? ` ${amountClassName}`
												: "")
										}
									>
										{formatCurrency(value)}
									</div>
								</div>
							);
						})}
					</div>

					{currentBalanceRow
						? (() => {
								const currentBalanceValue =
									currentBalanceRow.getValue(item);
								const currentBalanceClassName =
									getAmountClassName(
										currentBalanceRow.id,
										currentBalanceValue
									);

								return (
									<div
										className={
											styles.accountsCard__currentBalance
										}
									>
										<div
											className={
												styles.accountsCard__currentBalance_label
											}
										>
											{currentBalanceRow.label}
										</div>
										<div
											className={
												styles.accountsCard__currentBalance_value +
												(currentBalanceClassName
													? ` ${currentBalanceClassName}`
													: "")
											}
										>
											{formatCurrency(
												currentBalanceValue
											)}
										</div>
									</div>
								);
						  })()
						: null}
				</div>
			))}
		</div>
	);
}
