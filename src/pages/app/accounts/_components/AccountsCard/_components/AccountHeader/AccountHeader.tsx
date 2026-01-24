import { Dropdown } from "@components/ui/dropdown/Dropdown";
import styles from "./AccountHeader.module.scss";
import { Account } from "@appTypes/account";
import { ReactNode } from "react";

type HeaderProps = {
	icon: ReactNode;
	name: string;
	type: string;
	item: Account;
	openEdit: () => void;
	openDelete: () => void;
};

export function AccountHeader({
	icon,
	name,
	type,
	openEdit,
	openDelete,
}: HeaderProps) {
	return (
		<div className={styles.header}>
			<div className={styles.header}>
				<div className={styles.header_icon}>{icon}</div>

				<div>
					<div className={styles.header_name}>{name}</div>
					<div className={styles.header_type}>{type}</div>
				</div>
			</div>

			<div className={styles.dropdown_block}>
				<Dropdown align="right">
					<button
						type="button"
						role="menuitem"
						onClick={() => openEdit()}
					>
						Editar
					</button>
					<button
						type="button"
						role="menuitem"
						onClick={() => openDelete()}
					>
						Excluir
					</button>
				</Dropdown>
			</div>
		</div>
	);
}
