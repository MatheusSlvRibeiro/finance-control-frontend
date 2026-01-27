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
		<div className={styles.accountHeader}>
			<div className={styles.accountHeader}>
				<div className={styles.accountHeader__icon}>{icon}</div>

				<div>
					<div className={styles.accountHeader__name}>{name}</div>
					<div className={styles.accountHeader__type}>{type}</div>
				</div>
			</div>

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
	);
}
