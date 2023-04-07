import axios from "axios";
import ErrorResponse from "../../config/ErrorResponse";
import OpenFinanceURL from "../../constants/OpenFinanceURL";
import { TransactionResponse } from "../response/TransactionResponse";
import { TransactionResponseMapper } from "../mapper/TransactionResponseMapper";
import { CreditTransactionsResponse } from "../response/CreditTransactionsResponse";
import { DebitTransactionsResponse } from "../response/DebitTransactionsResponse";

export default class TransactionGateway {
    public async execute(accountId: string, isCredit: boolean): Promise<TransactionResponse[]> {
        let url: string;

        let response: TransactionResponse[]

        if(isCredit){
            url = OpenFinanceURL.OPEN_FINANCE_CREDIT_TRANSACTIONS_URL.replace('{{account_id}}', accountId);
            url = `http://172.20.10.2:3000/credit/${accountId}/transactions`
            
        } else{
            url = OpenFinanceURL.OPEN_FINANCE_DEBIT_TRANSACTIONS_URL.replace('{{account_id}}', accountId);
        }

        const transactions: any = await axios.get(url).then(response => {
            return response.data;
        }).catch(_error => {
            throw new ErrorResponse(404, "The API URL is invalid")
        })

        if(isCredit){
            response = TransactionResponseMapper.fromCredit(transactions as CreditTransactionsResponse);
        }else{
            response = TransactionResponseMapper.fromDebit(transactions as DebitTransactionsResponse);
        }
        
        return response;
    }
}