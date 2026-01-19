import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";
import styles from "./Dropdown.module.scss";

type DropDownProps = {
	children: ReactNode;
	align?: "left" | "right";
};

export function Dropdown({ children, align }: DropDownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement | null>(null);
	const menuId = useId();

	useEffect(() => {
		if (!isOpen) return;

		const onPointerDown = (event: PointerEvent) => {
			const root = rootRef.current;
			if (!root) return;

			if (!root.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen]);

	return (
		<div className={styles.root} ref={rootRef}>
			<button
				type="button"
				className={styles.trigger}
				aria-haspopup="menu"
				aria-expanded={isOpen}
				aria-controls={menuId}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<EllipsisVertical />
			</button>

			{isOpen && (
				<div
					id={menuId}
					role="menu"
					className={`${styles.menu} ${align === "left" ? styles.left : styles.right}`}
				>
					<div className={styles.items}>{children}</div>
				</div>
			)}
		</div>
	);
}
