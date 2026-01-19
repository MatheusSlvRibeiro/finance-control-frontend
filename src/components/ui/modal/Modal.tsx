import { X } from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: ReactNode;
	text?: string;
}

export function Modal({
	isOpen,
	onClose,
	children,
	text,
}: ModalProps): ReactElement | null {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.overlay} onClick={onClose} role="presentation">
			<div
				className={styles.container}
				role="dialog"
				aria-modal="true"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type="button"
					onClick={onClose}
					aria-label="Fechar modal"
					className={styles.closeButton}
				>
					<X />
				</button>

				{text && <div className={styles.text}>{text}</div>}
				<div>{children}</div>
			</div>
		</div>
	);
}
