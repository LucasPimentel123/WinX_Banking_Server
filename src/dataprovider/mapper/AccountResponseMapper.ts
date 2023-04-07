import AppConstants from "../../constants/AppConstants";
import { AppUtils } from "../../utils/AppUtils";
import { AccountResponse } from "../response/AccountResponse";
import { CreditAccountDataResponse } from "../response/CreditAccountResponse";
import { DebitAccountDataResponse } from "../response/DebitAccountResponse";

export class AccountResponseMapper{
    public static fromCredit(creditAccountDataResponse: CreditAccountDataResponse, creditLimits: any): AccountResponse {
        const account: AccountResponse  = {
            id: creditAccountDataResponse.creditCardAccountId,
            name: creditAccountDataResponse.brandName,
            value: creditLimits.usedAmount.amount,
            cardNumber: Math.floor(Math.random() * 9000) + 1000,
            expiryDate: AppUtils.generateRandomDate(),
            isCreditCard: true,
            limit: creditLimits.limitAmount.amount
        }

        return account
    }

    public static fromDebit(debitAccountDataResponse: DebitAccountDataResponse, debitAccountBalance: any): AccountResponse {
        const account: AccountResponse  = {
            id: debitAccountDataResponse.accountId,
            name: debitAccountDataResponse.brandName,
            value: debitAccountBalance.data.availableAmount.amount,
            cardNumber: Math.floor(Math.random() * 9000) + 1000,
            expiryDate: AppUtils.generateRandomDate(),
            isCreditCard: false,
            limit: null
        }

        return account
    }
}