import { LinksResponse } from "./LinksResponse";
import { MetaResponse } from "./MetaResponse";

export interface DebitTransactionsResponse {
    data: Array<DebitTransactionsDataResponse>
    links: LinksResponse
    meta: MetaResponse
}

export interface DebitTransactionsDataResponse {
    transactionId: string
    completedAuthorisedPaymentType: string
    creditDebitType: string
    transactionName: string
    type: string
    transactionAmount: DebitTransactionAmountResponse
    transactionDate: string
    partieCnpjCpf: string
    partiePersonType: string
    partieCompeCode: string
    partieBranchCode: string
    partieNumber: string
    partieCheckDigit: string
}

export interface DebitTransactionAmountResponse {
    amount: string
    currency: string
}