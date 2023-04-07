import { AccountResponse } from "../../dataprovider/response/AccountResponse"
import { OpenFinanceResponse } from "../response/OpenFinanceResponse"


export class AccountResponseMapper{
    public static from(account: AccountResponse, transactions: any): OpenFinanceResponse {
        const response: OpenFinanceResponse  = {
            name: account.name,
            value: account.value,
            cardNumber: account.cardNumber,
            expiryDate: account.expiryDate,
            isCreditCard: account.isCreditCard,
            limit: account.limit,
            transactions: transactions
        }

        return response
    }
}