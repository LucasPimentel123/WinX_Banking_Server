import ErrorResponse from "../../config/ErrorResponse";
import OpenFinanceURL from "../../constants/OpenFinanceURL";
import axios from "axios";
import { CreditTransactionsResponse } from "../response/CreditTransactionsResponse";

export default class TransactionGateway {
    public async execute(accountId: string, isCredit: boolean): Promise<CreditTransactionsResponse> {
        let url: string;

        if(isCredit){
            url = OpenFinanceURL.OPEN_FINANCE_CREDIT_TRANSACTIONS_URL.replace('{{account_id}}', accountId);
            
        } else{
            url = OpenFinanceURL.OPEN_FINANCE_DEBIT_TRANSACTIONS_URL.replace('{{account_id}}', accountId);
        }

        const transactions: CreditTransactionsResponse = await axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            console.log("error -> ", error)
            if (error instanceof ErrorResponse) {
                throw error
            }
            throw new ErrorResponse(404, "The API URL is invalid")
        })
        
        
        return transactions;
    }
}