import styles from "./button.module.scss";

type ButtonProps = {
	children?: React.ReactNode;
	onClick?: () => void;
	variant: string;
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	type?: "submit" | "reset" | "button" | undefined;
};

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant,
	size,
	disabled,
	type,
}) => {
	const variantClass =
		variant === "login"
			? styles.login
			: variant === "register"
			? styles.register
			: variant === "disabled"
			? styles.disabled
			: variant === "create"
			? styles.create
			: styles.default;

	const sizeClass =
		size === "sm"
			? styles.sizeSm
			: size === "lg"
			? styles.sizeLg
			: styles.sizeMd;

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={[variantClass, sizeClass].join(" ")}
		>
			{children}
		</button>
	);
};

export default Button;
