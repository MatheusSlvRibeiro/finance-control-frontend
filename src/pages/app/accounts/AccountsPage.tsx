import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import styles from "./AccountsPage.module.scss";
import { Plus } from "lucide-react";
import Button from "@components/ui/button/button";
import NetWorth from "./_components/NetWorth/NetWorth";
import AccountsCard from "./_components/AccountsCard/AccountsCard";

export default function AccountsPage() {
	return (
		<div className={styles.accountsPage__container}>
			<div className={styles.accountsPage__content}>
				<PageHeader
					title="Contas"
					subtitle="Gerencie suas contas bancárias e carteiras"
				>
					<Button size="sm" variant="register">
						<Plus />
						Nova conta
					</Button>
				</PageHeader>

				<NetWorth />

				<AccountsCard />
			</div>
		</div>
	);
}
