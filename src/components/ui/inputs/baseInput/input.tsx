import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	prefix?: ReactNode;
};

export function Input({ label, id, prefix, className, ...rest }: InputProps) {
	return (
		<div className={styles.input}>
			{label && id && <label htmlFor={id}>{label}</label>}
			<div className={styles.field}>
				{prefix && <span className={styles.prefix}>{prefix}</span>}
				<input
					id={id}
					className={[
						styles.control,
						prefix ? styles.hasPrefix : "",
						className ?? "",
					].join(" ")}
					{...rest}
				/>
			</div>
		</div>
	);
}
