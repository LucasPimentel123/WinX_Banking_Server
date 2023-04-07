import axios from "axios";
import ErrorResponse from "../../config/ErrorResponse";
import { AccountResponseMapper } from "../mapper/AccountResponseMapper";
import { AccountResponse } from "../response/AccountResponse";
import { CreditAccountResponse } from "../response/CreditAccountResponse";
import { DebitAccountResponse } from "../response/DebitAccountResponse";

export default class AccountGateway {
    public async execute(): Promise<AccountResponse[]> {
        let response: Array<AccountResponse> = []

        const creditAccount: CreditAccountResponse = await axios.get("http://localhost:3000/credit/accounts").then(response => {
            return response.data;
        }).catch( _error =>{
            throw new ErrorResponse(404, "The API URL is invalid")
        })
        const debitAccount: DebitAccountResponse = await axios.get("http://localhost:3000/debit/accounts").then(response => {
            return response.data;
        }).catch( _error =>{
            throw new ErrorResponse(404, "The API URL is invalid")
        })

        for(const account of creditAccount.data){
            const creditAccountLimits: any = await axios.get(`http://localhost:3000/credit/${account.creditCardAccountId}/limits`).then(response => {
                return response.data;
            }).catch( _error =>{
                throw new ErrorResponse(404, "The API URL is invalid")
            })
            response.push(AccountResponseMapper.fromCredit(account,creditAccountLimits))
        }

        for(const account of debitAccount.data){
            const debitAccountBalance: any = await axios.get(`http://localhost:3000/debit/accounts/${account.accountId}/balances`).then(response => {
                return response.data;
            }).catch( _error =>{
                throw new ErrorResponse(404, "The API URL is invalid")
            })
            response.push(AccountResponseMapper.fromDebit(account,debitAccountBalance))
        }
        return response
    }
}