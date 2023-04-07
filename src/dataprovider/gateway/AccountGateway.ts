import axios from "axios";
import ErrorResponse from "../../config/ErrorResponse";
import OpenFinanceURL from "../../constants/OpenFinanceURL";
import { AccountResponseMapper } from "../mapper/AccountResponseMapper";
import { AccountBalanceResponse } from "../response/AccountBalanceResponse";
import { AccountLimitsResponse } from "../response/AccountLimitsResponse";
import { AccountResponse } from "../response/AccountResponse";
import { CreditAccountResponse } from "../response/CreditAccountResponse";
import { DebitAccountResponse } from "../response/DebitAccountResponse";

export default class AccountGateway {
    public async execute(): Promise<AccountResponse[]> {
        let response: Array<AccountResponse> = []
        const creditAccount: CreditAccountResponse = await axios.get(OpenFinanceURL.OPEN_FINANCE_CREDIT_ACCOUNTS_URL).then(response => {
            return response.data;
        }).catch( _error =>{
            throw new ErrorResponse(404, "The API URL is invalid")
        })
        const debitAccount: DebitAccountResponse = await axios.get(OpenFinanceURL.OPEN_FINANCE_DEBIT_ACCOUNTS_URL).then(response => {
            return response.data;
        }).catch( _error =>{
            throw new ErrorResponse(404, "The API URL is invalid")
        })

        for(const account of creditAccount.data){
            const url = OpenFinanceURL.OPEN_FINANCE_CREDIT_LIMITS_URL.replace('{{account_id}}', account.creditCardAccountId);
            const creditAccountLimits: AccountLimitsResponse = await axios.get(url).then(response => {
                return response.data;
            }).catch( _error =>{
                throw new ErrorResponse(404, "The API URL is invalid")
            })
            response.push(AccountResponseMapper.fromCredit(account,creditAccountLimits.data[0]))
        }

        for(const account of debitAccount.data){
            const url = OpenFinanceURL.OPEN_FINANCE_DEBIT_BALANCES_URL.replace('{{account_id}}', account.accountId);
            const debitAccountBalance: AccountBalanceResponse = await axios.get(url).then(response => {
                return response.data;
            }).catch( _error =>{
                throw new ErrorResponse(404, "The API URL is invalid")
            })
            response.push(AccountResponseMapper.fromDebit(account,debitAccountBalance))
        }
        return response
    }
}