import { formatCurrency } from "@utils/formatCurrency";
import styles from "./TransactionsTableMobile.module.scss";
import { Dropdown } from "@components/ui/dropdown/Dropdown";
import type { Transaction } from "@appTypes/transaction";

type Props = {
    transactions: Transaction[];
    onEdit: (t: Transaction) => void;
    onDelete: (t: Transaction) => void;
};

export function TransactionsTableMobile({ transactions, onEdit, onDelete }: Props) {
    return (
        <table className={styles.transactionsTable}>
            <tbody className={styles.body}>
                {transactions.map((item) => (
                    <tr className={styles.bodyRow} key={item.id}>
                        <td className={styles.bodyRowMain}>
                            <div className={styles.bodyRowAccount}>{item.account}</div>
                            <div className={styles.bodyRowDescription}>{item.description}</div>
                            <div
                                className={styles.bodyRowCategory}
                                style={{ backgroundColor: item.categoryColor }}
                            >
                                {item.category}
                            </div>
                        </td>

                        <td className={styles.bodyRowMeta}>
                            <div>
                                <div className={styles.bodyRowDate}>{item.date}</div>
                                <div className={styles.bodyRowValue}>{formatCurrency(item.value)}</div>
                            </div>

                            <Dropdown>
                                <button type="button" role="menuitem" onClick={() => onEdit(item)}>
                                    Editar
                                </button>
                                <button type="button" role="menuitem" onClick={() => onDelete(item)}>
                                    Excluir
                                </button>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}