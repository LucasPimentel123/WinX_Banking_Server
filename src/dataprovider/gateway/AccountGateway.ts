import axios from "axios";
import ErrorResponse from "../../config/ErrorResponse";
import { CreditAccountResponse } from "../response/CreditAccountResponse";
import { DebitAccountResponse } from "../response/DebitAccountResponse";

export default class AccountGateway {

    public async execute(): Promise<any> {
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
        return null;
    }
}