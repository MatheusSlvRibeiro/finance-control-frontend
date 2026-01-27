import { useMediaQuery } from "react-responsive";
import styles from "./TransactionsTable.module.scss";
import { TransactionsTableMobile } from "./_components/TransactionsTableMobile/TransactionsTableMobile";
import { TransactionsTableDesktop } from "./_components/TransactionsTableDesktop/TransactionsTableDesktop";
import { useState } from "react";
import type { Transaction } from "@appTypes/transaction";
import { toast } from "react-toastify";
import { TransactionsTableActionsModal } from "../TransactionsTableActionsModal/TransactionsTableActionsModal";
import { useTransactions } from "@hooks/useTransactions";
import Button from "@components/ui/button/button";
import { SkeletonLoader } from "@components/ui/skeletonLoader/skeletonLoader";

export type TransactionsTableModalType = "edit" | "delete" | null;

type Props = {
	data: Transaction[];
};

export function TransactionsTable({ data }: Props) {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const { loading, error, reload } = useTransactions();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] =
		useState<TransactionsTableModalType>(null);
	const [selectedTransaction, setSelectedTransaction] =
		useState<Transaction | null>(null);

	const closeModal = () => {
		setIsModalOpen(false);
		setModalType(null);
		setSelectedTransaction(null);
	};

	const openEdit = (transaction: Transaction) => {
		setSelectedTransaction(transaction);
		setModalType("edit");
		setIsModalOpen(true);
	};

	const openDelete = (transaction: Transaction) => {
		setSelectedTransaction(transaction);
		setModalType("delete");
		setIsModalOpen(true);
	};

	const handleSave = () => {
		toast("Informações atualizadas com sucesso!", {
			toastId: "transaction-info-success",
		});
		closeModal();
	};

	if (loading) {
		return (
			<div className={styles.transactionsTable}>
				<SkeletonLoader rows={4} />
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.transactionsTable}>
				<p>Falha ao carregar: {error.message}</p>
				<Button variant="default" size="md" onClick={reload}>
					Tentar novamente
				</Button>
			</div>
		);
	}

	return (
		<div className={styles.transactionsTable}>
			{isMobile ? (
				<TransactionsTableMobile
					transactions={data}
					onEdit={openEdit}
					onDelete={openDelete}
				/>
			) : (
				<TransactionsTableDesktop
					transactions={data}
					onEdit={openEdit}
					onDelete={openDelete}
				/>
			)}

			<TransactionsTableActionsModal
				isOpen={isModalOpen}
				modalType={modalType}
				selectedTransaction={selectedTransaction}
				onClose={closeModal}
				onSave={handleSave}
			/>
		</div>
	);
}
