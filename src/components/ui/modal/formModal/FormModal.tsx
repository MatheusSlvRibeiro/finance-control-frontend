import { ModalButton } from '../_components/modalButton/modalButton';
import styles from './FormModal.module.scss';

type FormModalProps = {
	title?: string;
	message?: string;
	children: React.ReactNode;
	closeModal: () => void;
	handleSave: () => void;
	formId?: string;
};

export function FormModal({
	title,
	message,
	children,
	closeModal,
	handleSave,
	formId,
}: FormModalProps) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.message}>{message}</p>
			</div>

			<div className={styles.form}>{children}</div>

			<div className={styles.buttons}>
				<ModalButton text="Cancelar" variant="cancel-success" onClick={closeModal} />

				{formId ? (
					<ModalButton text="Salvar" variant="save" type="submit" form={formId} />
				) : (
					<ModalButton text="Salvar" variant="save" onClick={handleSave} />
				)}
			</div>
		</div>
	);
}
