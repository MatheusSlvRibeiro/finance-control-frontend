import { toast } from "react-toastify";
import styles from "./EditAccountModal.module.scss";
import { formatCurrency } from "@utils/formatCurrency";
import { ModalButton } from "@components/ui/modal/_components/modalButton/modalButton";
import { useState } from "react";
import { Select, SelectOption } from "@components/ui/select/Select";
import { Building2, PiggyBank, Wallet } from "lucide-react";
import { Input } from "@components/ui/inputs/baseInput/input";
import { CurrencyInput } from "@components/ui/inputs/currencyInput/CurrencyInput";

type EditAccountsModalProps = {
	closeModal: () => void;
	accountName: string | undefined;
	openingBalance: number;
	type: string | undefined;
};

export function EditAccountsModal({
	closeModal,
	accountName,
	openingBalance,
	type,
}: EditAccountsModalProps) {
	const handleSave = () => {
		toast("Conta atualizada com sucesso!", {
			toastId: "success-edit",
		}) && closeModal();
	};

	const [name, setName] = useState("");
	const [openingBalanceInCents, setOpeningBalanceInCents] = useState(0);
	const [accountType, setAccountType] = useState("");

	const options: SelectOption[] = [
		{
			value: "checking",
			label: "Conta corrente",
			icon: <Building2 size={18} />,
		},
		{ value: "savings", label: "Poupança", icon: <PiggyBank size={18} /> },
		{ value: "wallet", label: "Carteira", icon: <Wallet size={18} /> },
	];

	return (
		<div className={styles.modal_edit}>
			<div className={styles.modal_header}>
				<h3>Editar conta</h3>
				<p>Atualize as informações da sua conta</p>
			</div>
			<div className={styles.modal_form}>
				<Input
					id="name"
					name="name"
					label="Nome"
					placeholder={`${accountName}`}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<CurrencyInput
					id="openingBalance"
					name="openingBalance"
					label="Saldo inicial"
					placeholder={`${openingBalance}`}
					valueInCents={openingBalanceInCents}
					onChangeInCents={setOpeningBalanceInCents}
				/>

				<Select
					id="accountType"
					name="accountType"
					label="Tipo de conta"
					options={options}
					value={accountType}
					onChange={setAccountType}
					placeholder={`${type}`}
				/>
			</div>

			<div className={styles.modal_buttons}>
				<ModalButton
					text="Cancelar"
					variant="cancel-success"
					onClick={closeModal}
				/>

				<ModalButton
					text="Salvar"
					variant="save"
					onClick={handleSave}
				/>
			</div>
		</div>
	);
}
