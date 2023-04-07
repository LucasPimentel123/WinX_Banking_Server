import { AccountResponse } from "../../dataprovider/response/AccountResponse"
import { OpenFinanceResponse } from "../response/OpenFinanceResponse"


export class AccountResponseMapper{
    public static from(account: AccountResponse, transactions: any): OpenFinanceResponse {
        const response: OpenFinanceResponse  = {
            name: account.name,
            value: parseFloat(account.value).toFixed(2),
            cardNumber: account.cardNumber,
            expiryDate: account.expiryDate,
            isCreditCard: account.isCreditCard,
            limit: account.limit !== null ? parseFloat(account.limit).toFixed(2) : account.limit,
            transactions: transactions
        }

        return response
    }
}