export type NumericAccountField =
    | "openingBalance"
    | "incomes"
    | "incomingTransfer"
    | "outgoingTransfers"
    | "expenses"
    | "balance";

export type AccountTotals = Record<NumericAccountField, number>;