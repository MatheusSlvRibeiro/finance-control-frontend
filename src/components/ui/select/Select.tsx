import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Select.module.scss";

export type SelectOption = {
	value: string;
	label: string;
	icon?: ReactNode;
	disabled?: boolean;
};

type SelectProps = {
	id?: string;
	name?: string;
	label?: string;
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
};

export function Select({
	label,
	id,
	options,
	placeholder = "Selecione...",
	className,
	value,
	onChange,
	name,
	disabled,
}: SelectProps) {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const listRef = useRef<HTMLUListElement | null>(null);

	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);

	const selected = useMemo(
		() => options.find((opt) => opt.value === value),
		[options, value],
	);

	useEffect(() => {
		const onPointerDown = (e: PointerEvent) => {
			if (!rootRef.current) return;
			if (!rootRef.current.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, []);

	useEffect(() => {
		if (!open) setActiveIndex(-1);
	}, [open]);

	useEffect(() => {
		if (!open) return;
		if (activeIndex < 0) return;
		const el = listRef.current?.querySelector<HTMLElement>(
			`[data-index="${activeIndex}"]`,
		);
		el?.scrollIntoView({ block: "nearest" });
	}, [open, activeIndex]);

	const openList = () => {
		if (disabled) return;
		setOpen(true);

		const selectedIndex = options.findIndex(
			(opt) => opt.value === value && !opt.disabled,
		);
		if (selectedIndex >= 0) {
			setActiveIndex(selectedIndex);
			return;
		}

		const firstEnabled = options.findIndex((opt) => !opt.disabled);
		setActiveIndex(firstEnabled);
	};

	const closeList = () => {
		setOpen(false);
		buttonRef.current?.focus();
	};

	const commit = (opt: SelectOption) => {
		if (opt.disabled) return;
		onChange(opt.value);
		closeList();
	};

	const moveActive = (dir: 1 | -1) => {
		if (!open) return;
		const enabledIndices = options
			.map((opt, idx) => ({ opt, idx }))
			.filter((x) => !x.opt.disabled)
			.map((x) => x.idx);

		if (enabledIndices.length === 0) return;

		const currentPos = enabledIndices.indexOf(activeIndex);
		const nextPos =
			currentPos === -1
				? 0
				: (currentPos + dir + enabledIndices.length) %
					enabledIndices.length;

		setActiveIndex(enabledIndices[nextPos]);
	};

	return (
		<div
			ref={rootRef}
			className={[styles.select, className ?? ""].join(" ")}
		>
			{label && id && <label htmlFor={id}>{label}</label>}

			{name && <input type="hidden" name={name} value={value} />}

			<button
				ref={buttonRef}
				type="button"
				className={styles.control}
				disabled={disabled}
				aria-haspopup="listbox"
				aria-expanded={open}
				onClick={() => (open ? closeList() : openList())}
				onKeyDown={(e) => {
					if (disabled) return;

					if (e.key === "ArrowDown") {
						e.preventDefault();
						if (!open) openList();
						else moveActive(1);
					}

					if (e.key === "ArrowUp") {
						e.preventDefault();
						if (!open) openList();
						else moveActive(-1);
					}

					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						if (!open) openList();
						else if (activeIndex >= 0) commit(options[activeIndex]);
					}

					if (e.key === "Escape") {
						e.preventDefault();
						closeList();
					}
				}}
			>
				<span className={styles.value}>
					{selected ? (
						<>
							{selected.icon && (
								<span className={styles.icon}>
									{selected.icon}
								</span>
							)}
							<span>{selected.label}</span>
						</>
					) : (
						<span className={styles.placeholder}>
							{placeholder}
						</span>
					)}
				</span>

				<span className={styles.caret}>
					<ChevronDown size={18} />
				</span>
			</button>

			{open && (
				<ul
					ref={listRef}
					className={styles.list}
					role="listbox"
					aria-label={label ?? "Select"}
				>
					{options.map((opt, idx) => {
						const isSelected = opt.value === value;
						const isActive = idx === activeIndex;

						return (
							<li
								key={opt.value}
								role="option"
								aria-selected={isSelected}
								data-selected={isSelected ? "true" : "false"}
								data-active={isActive ? "true" : "false"}
								data-disabled={opt.disabled ? "true" : "false"}
								data-index={idx}
								className={styles.option}
								onMouseEnter={() => setActiveIndex(idx)}
								onMouseDown={(e) => e.preventDefault()}
								onClick={() => commit(opt)}
							>
								{opt.icon && (
									<span className={styles.optionIcon}>
										{opt.icon}
									</span>
								)}
								<span className={styles.optionLabel}>
									{opt.label}
								</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
