import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import Button from "@components/ui/button/button";
import { Plus } from "lucide-react";
import styles from "./TransactionsPage.module.scss";
import { TransactionsTable } from "./_components/TransactionsTable/TransactionsTable";
import { BaseModal } from "@components/ui/modal/baseModal/BaseModal";
import { TransactionForm } from "./_components/TransactionsForm/TransactionsForm";
import { FormModal } from "@components/ui/modal/formModal/FormModal";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTransactions } from "@hooks/useTransactions";

export default function TransactionsPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data } = useTransactions();

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleSubmit = () => {
		setIsModalOpen(false);
		toast("Transação cadastrada com sucesso!", {
			toastId: "transaction-add-success",
		});
	};

	return (
		<div className={styles.transactionsPage}>
			<PageHeader
				title="Transações"
				subtitle="Gerencie suas receitas e despesas"
			>
				<Button size="sm" variant="register" onClick={openModal}>
					<Plus />
					Nova transação
				</Button>
			</PageHeader>

			<TransactionsTable data={data} />

			<BaseModal isOpen={isModalOpen} onClose={closeModal}>
				<FormModal
					title="Nova transação"
					message="Cadastre as informações da transação"
					closeModal={closeModal}
					handleSave={handleSubmit}
				>
					<TransactionForm />
				</FormModal>
			</BaseModal>
		</div>
	);
}
