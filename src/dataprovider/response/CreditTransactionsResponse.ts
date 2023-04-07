import { MetaResponse } from "./MetaResponse";
import { LinksResponse } from "./LinksResponse";

export interface CreditTransactionsResponse {
    data: Array<CreditTransactionsDataResponse>
    links: LinksResponse
    meta: MetaResponse
}

export interface CreditTransactionsDataResponse {
    transactionId: string
    identificationNumber: string
    transactionName: string
    billId: string
    creditDebitType: string
    transactionType: string
    transactionalAdditionalInfo: string
    paymentType: string
    feeType: string
    feeTypeAdditionalInfo: string
    otherCreditsType: string
    otherCreditsAdditionalInfo: string
    chargeIdentificator: string
    chargeNumber: number
    brazilianAmount: CreditTransactionsAmountResponse
    amount: CreditTransactionsAmountResponse
    transactionDate: string
    billPostDate: string
    payeeMCC: number
}

export interface CreditTransactionsAmountResponse {
    amount: string
    currency: string
}