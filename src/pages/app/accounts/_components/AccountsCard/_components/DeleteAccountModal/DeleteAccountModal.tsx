import { toast } from "react-toastify";
import styles from "./DeleteAccountsModal.module.scss";
import { ModalButton } from "@components/ui/modal/_components/modalButton/modalButton";

type DeleteAccountsModalProps = {
	closeModal: () => void;
	name: string | undefined;
};

export function DeleteAccountsModal({
	name,
	closeModal,
}: DeleteAccountsModalProps) {
	return (
		<div className={styles.container}>
			<div className={styles.header_title}>
				<h3>Excluir Conta</h3>
			</div>
			<div className={styles.text}>
				<p>
					Tem certeza que deseja excluir a conta{" "}
					<span className={styles.name}>{name}</span> ? <br />
					Esta ação não pode ser desfeita.
				</p>
			</div>

			<div className={styles.modal_buttons}>
				<ModalButton
					text="Cancelar"
					variant="cancel-delete"
					onClick={() => closeModal()}
				></ModalButton>
				<ModalButton
					text="Excluir"
					variant="delete"
					onClick={() =>
						toast("Conta excluída com sucesso!", {
							toastId: "success-delete",
						}) && closeModal()
					}
				></ModalButton>
			</div>
		</div>
	);
}
