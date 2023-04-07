import { AccountResponse } from "../response/AccountResponse";
import { CreditAccountDataResponse } from "../response/CreditAccountResponse";
import { DebitAccountDataResponse } from "../response/DebitAccountResponse";

export class AccountResponseMapper{
    public static fromCredit(creditAccountDataResponse: CreditAccountDataResponse, creditLimits: any): AccountResponse {
        const account: AccountResponse  = {
            name: creditAccountDataResponse.brandName,
            value: creditLimits.usedAmount.amount,
            cardNumber: 1234, // TODO: Buscar numero do cartao
            expiryDate: "", // TODO: Buscar data de expiracao
            isCreditCard: true,
            limit: creditLimits.limitAmount.amount
        }

        return account
    }

    public static fromDebit(debitAccountDataResponse: DebitAccountDataResponse, debitAccountBalance: any): AccountResponse {
        const account: AccountResponse  = {
            name: debitAccountDataResponse.brandName,
            value: debitAccountBalance,
            cardNumber: 1234, // TODO: Buscar numero do cartao
            expiryDate: "", // TODO: Buscar data de expiracao
            isCreditCard: false,
            limit: null
        }

        return account
    }
}