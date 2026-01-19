import { toast } from "react-toastify";
import { ReactElement, useState } from "react";
import { ModalButton } from "@components/ui/modal/_components/modalButton/modalButton";
import { Select } from "@components/ui/select/Select";
import { Input } from "@components/ui/inputs/baseInput/input";
import { CurrencyInput } from "@components/ui/inputs/currencyInput/CurrencyInput";
import styles from "./CreateAccounts.module.scss";
import type { SelectOption } from "@components/ui/select/Select";
import { Building2, PiggyBank, Wallet } from "lucide-react";

export function CreateAccountsModal({
	closeModal,
}: {
	closeModal: () => void;
}): ReactElement {
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

	const handleSave = () => {
		toast("Conta criada com sucesso!", {
			toastId: "success-create-account",
		});
		closeModal();
	};

	return (
		<div className={styles.modal}>
			<div className={styles.text}>
				<h3>Nova conta</h3>
				<p>Cadastre as informações da sua conta</p>
			</div>
			<div className={styles.modal_form}>
				<Input
					id="name"
					name="name"
					label="Nome"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<CurrencyInput
					id="openingBalance"
					name="openingBalance"
					label="Saldo inicial"
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
					placeholder="Selecione o tipo de conta"
				/>
			</div>

			<div className={styles.buttons}>
				<ModalButton
					variant="cancel-success"
					text="Cancelar"
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
