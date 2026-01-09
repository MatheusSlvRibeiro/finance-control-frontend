import styles from "./button.module.scss";

type ButtonProps = {
	children?: React.ReactNode;
	onClick?: () => void;
	variant: string;
	disabled?: boolean;
	type?: "submit" | "reset" | "button" | undefined;
};

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant,
	disabled,
	type,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={
				variant === "login"
					? styles.login
					: variant === "register"
					? styles.register
					: variant === "disabled"
					? styles.disabled
					: styles.default
			}
		>
			{children}
		</button>
	);
};

export default Button;
