import { Transaction } from "@appTypes/transaction";
import { BaseModal } from "@components/ui/modal/baseModal/BaseModal";
import { FormModal } from "@components/ui/modal/formModal/FormModal";
import { TransactionForm } from "../TransactionsForm/TransactionsForm";
import { DeleteModal } from "@components/ui/modal/deleteModal/DeleteModal";
import { TransactionsTableModalType } from "../TransactionsTable/TransactionsTable";

type Props = {
	isOpen: boolean;
	modalType: TransactionsTableModalType;
	selectedTransaction: Transaction | null;
	onClose: () => void;
	onSave: () => void;
	editTitle?: string;
	editMessage?: string;
};

export function TransactionsTableActionsModal({
	isOpen,
	modalType,
	selectedTransaction,
	onClose,
	onSave,
	editTitle,
	editMessage,
}: Props) {
	return (
		<BaseModal isOpen={isOpen} onClose={onClose}>
			{modalType === "edit" && selectedTransaction && (
				<FormModal
					title={editTitle}
					message={editMessage}
					closeModal={onClose}
					handleSave={onSave}
				>
					<TransactionForm initialValues={selectedTransaction} />
				</FormModal>
			)}

			{modalType === "delete" && selectedTransaction && (
				<DeleteModal
					title="Excluir transação"
					message={
						<>
							Tem certeza que deseja excluir a transação{" "}
							<strong>{selectedTransaction.description}</strong>?
							<br />
							Essa ação não pode ser desfeita.
						</>
					}
					closeModal={onClose}
					deleteMessage="Transação excluída com sucesso!"
				/>
			)}
		</BaseModal>
	);
}
