import { useState } from "react";
import { formatCurrency } from "@utils/formatCurrency";
import type { Account } from "@appTypes/account";
import { Dropdown } from "@components/ui/dropdown/Dropdown";
import { BaseModal } from "@components/ui/modal/baseModal/BaseModal";
import { EditAccountsModal } from "./_components/EditAccountModal/EditAccountModal";
import { DeleteModal } from "@components/ui/modal/deleteModal/DeleteModal";
import styles from "./AccountsCard.module.scss";
import { userAccounts } from "@mocks/accounts/userAccounts";

type RowKind = "default" | "income" | "expense" | "balance";

type ModalType = "edit" | "delete" | null;

export type RowId =
	| "openingBalance"
	| "incomes"
	| "incomingTransfer"
	| "outgoingTransfers"
	| "expenses"
	| "currentBalance";

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

const ROW_KIND: Record<RowId, RowKind> = {
	openingBalance: "balance",
	incomes: "income",
	incomingTransfer: "income",
	outgoingTransfers: "expense",
	expenses: "expense",
	currentBalance: "balance",
};

const currentBalanceRow = rows.find((row) => row.id === "currentBalance");
const metricRows = rows.filter((row) => row.id !== "currentBalance");

const getAmountClassName = (rowId: RowId, value: number) => {
	const kind = ROW_KIND[rowId];

	if (value === 0) return styles.amountDefault;

	if (kind === "income") return styles.amountIncome;
	if (kind === "expense") return styles.amountExpense;

	if (kind === "balance") {
		return value > 0 ? styles.amountIncome : styles.amountExpense;
	}

	return undefined;
};

export default function AccountsCard() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState<ModalType>(null);
	const [selectedAccount, setSelectedAccount] = useState<Account | null>(
		null,
	);

	const closeModal = () => {
		setIsModalOpen(false);
		setModalType(null);
		setSelectedAccount(null);
	};

	const openEdit = (account: Account) => {
		setSelectedAccount(account);
		setModalType("edit");
		setIsModalOpen(true);
	};

	const openDelete = (account: Account) => {
		setSelectedAccount(account);
		setModalType("delete");
		setIsModalOpen(true);
	};

	return (
		<>
			<div className={styles.accountsCard__grid}>
				{userAccounts.map((item) => (
					<div className={styles.accountsCard} key={item.name}>
						<div className={styles.accountsCard__header}>
							<div className={styles.accountsCard__header}>
								<div
									className={styles.accountsCard__header_icon}
								></div>

								<div>
									<div
										className={
											styles.accountsCard__header_name
										}
									>
										{item.name}
									</div>
									<div
										className={
											styles.accountsCard__header_type
										}
									>
										{item.type}
									</div>
								</div>
							</div>

							<div className={styles.dropdown_block}>
								<Dropdown align="right">
									<button
										type="button"
										role="menuitem"
										onClick={() => openEdit(item)}
									>
										Editar
									</button>
									<button
										type="button"
										role="menuitem"
										onClick={() => openDelete(item)}
									>
										Excluir
									</button>
								</Dropdown>
							</div>
						</div>

						<div className={styles.accountsCard__metrics}>
							{metricRows.map((row) => {
								const value = row.getValue(item);
								const amountClassName = getAmountClassName(
									row.id,
									value,
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
											currentBalanceValue,
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
													currentBalanceValue,
												)}
											</div>
										</div>
									);
								})()
							: null}
					</div>
				))}
			</div>

			<BaseModal isOpen={isModalOpen} onClose={closeModal}>
				{modalType === "edit" && selectedAccount && (
					<EditAccountsModal
						closeModal={closeModal}
						accountName={selectedAccount.name}
						openingBalance={selectedAccount.openingBalance}
						type={selectedAccount.type}
					/>
				)}

				{modalType === "delete" && selectedAccount && (
					<DeleteModal
						title="Excluir conta"
						message={
							<>
								Tem certeza que deseja excluir a conta{" "}
								<strong>{selectedAccount.name}</strong>?
								<br />
								Essa ação não pode ser desfeita.
							</>
						}
						closeModal={closeModal}
						deleteMessage="Conta excluída com sucesso!"
					/>
				)}
			</BaseModal>
		</>
	);
}
