import styles from './modalButton.module.scss';

type modalButtonProps = {
	variant?: string;
	text: string;
	onClick?: () => void;
	form?: string;
	type?: 'button' | 'submit';
};

export function ModalButton({ variant, text, onClick, form, type }: modalButtonProps) {
	const varianClass =
		variant === 'delete'
			? styles.delete
			: variant === 'save'
				? styles.save
				: variant === 'cancel-success'
					? styles.cancel_success
					: variant === 'cancel-delete'
						? styles.cancel_delete
						: styles.default;

	return (
		<button type={type ?? 'button'} onClick={onClick} className={varianClass} form={form}>
			{text}
		</button>
	);
}
