import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import styles from "./AccountsPage.module.scss";
import { Plus } from "lucide-react";
import Button from "@components/ui/button/button";
import NetWorth from "./_components/NetWorth/NetWorth";
import AccountsCard from "./_components/AccountsCard/AccountsCard";
import { useState } from "react";
import { Modal } from "@components/ui/modal/Modal";
import { CreateAccountsModal } from "./_components/CreateAccountsModal/CreateAccountsModal";

export default function AccountsPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={styles.accountsPage__container}>
			<div className={styles.accountsPage__content}>
				<PageHeader
					title="Contas"
					subtitle="Gerencie suas contas bancárias e carteiras"
				>
					<Button
						onClick={() => setIsModalOpen(true)}
						size="sm"
						variant="register"
					>
						<Plus />
						Nova conta
					</Button>
				</PageHeader>

				<NetWorth />

				<AccountsCard />

				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<CreateAccountsModal closeModal={closeModal} />
				</Modal>
			</div>
		</div>
	);
}
