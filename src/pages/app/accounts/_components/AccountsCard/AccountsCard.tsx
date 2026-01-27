import { useState } from "react";
import { formatCurrency } from "@utils/formatCurrency";
import type { Account } from "@appTypes/account";
import { BaseModal } from "@components/ui/modal/baseModal/BaseModal";
import { EditAccountsModal } from "./_components/EditAccountModal/EditAccountModal";
import { DeleteModal } from "@components/ui/modal/deleteModal/DeleteModal";
import styles from "./AccountsCard.module.scss";
import { currentBalanceRow, getAmountClassName, metricRows } from "./helpers";
import { AccountHeader } from "./_components/AccountHeader/AccountHeader";
import { AccountMetrics } from "./_components/AccountMetrics/AccountMetrics";
import { useAccounts } from "@hooks/useAccounts";
import { accountTypes } from "src/constants/accountTypes.constants";

type ModalType = "edit" | "delete" | null;

export default function AccountsCard() {
	const { data: accounts } = useAccounts();

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

	const accountTypesMap = Object.fromEntries(
		accountTypes.map((t) => [t.value, t]),
	);

	return (
		<>
			<div className={styles.accountsGrid}>
				{accounts.map((item) => {
					const accountType =
						accountTypesMap[item.type] || accountTypes[0];

					return (
						<div className={styles.accountsCard} key={item.name}>
							<AccountHeader
								icon={accountType.icon}
								name={item.name}
								type={accountType.label ?? item.type}
								item={item}
								openEdit={() => openEdit(item)}
								openDelete={() => openDelete(item)}
							/>

							<div className={styles.accountsCard__metrics}>
								{metricRows.map((row) => {
									const value = row.getValue(item);
									const amountClassName = getAmountClassName(
										row.id,
										value,
									);

									return (
										<AccountMetrics
											key={row.id}
											id={row.id}
											label={row.label}
											className={amountClassName}
											value={value}
										/>
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
														styles.accountsCard__currentBalanceLabel
													}
												>
													{currentBalanceRow.label}
												</div>
												<div
													className={
														styles.accountsCard__currentBalanceValue +
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
					);
				})}
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
