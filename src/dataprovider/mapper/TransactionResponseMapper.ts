import { CreditTransactionsResponse } from "../response/CreditTransactionsResponse";
import { DebitTransactionsResponse } from "../response/DebitTransactionsResponse";
import { TransactionResponse } from "../response/TransactionResponse";

export class TransactionResponseMapper{
    public static fromCredit(transactionParamCredit: CreditTransactionsResponse): TransactionResponse[] {
        let result: TransactionResponse[] = []
        for(const transaction of transactionParamCredit.data) {
            const numberString = parseFloat(transaction.amount.amount).toFixed(2);
            const number = parseFloat(numberString); 

            const response: TransactionResponse  = {
                type: transaction.transactionType,
                date: transaction.transactionDate,
                value: number,
                creditDebitType: transaction.creditDebitType
            }
            result.push(response)
        }

        return result
    }

    public static fromDebit(transactionParamDebit: DebitTransactionsResponse): TransactionResponse[] {
        let result: TransactionResponse[] = []
        for(const transaction of transactionParamDebit.data) {
            const numberString = parseFloat(transaction.transactionAmount.amount).toFixed(2);
            const number = parseFloat(numberString); 

            const response: TransactionResponse  = {
                type: transaction.type,
                date: transaction.transactionDate,
                value: number,
                creditDebitType: transaction.creditDebitType
            }
            result.push(response)
        }

        return result
    }
}