import BaseController from "./BaseController";
import { Request, Response, NextFunction } from 'express';
import { loginUserSchema } from '../validators/UserSchema'
import { LoginUserRequest } from "../request";
import TransactionService from "../../core/service/TransactionService";
import { AccountService } from "../../core/service";
import { AccountResponseMapper } from "../mapper/OpenFinanceResponseMapper";
import { OpenFinanceResponse } from "../response/OpenFinanceResponse";

export default class OpenFinanceController extends BaseController {

    public constructor(private readonly accountService: AccountService, private readonly transactionService: TransactionService){
        super();
    }

    public execute = async (_: Request, res: Response, next: NextFunction) => {
        let response: Array<OpenFinanceResponse> = [];
        
        const accounts = await this.accountService.execute()

        for(const account of accounts){
            const transactions = await this.transactionService.execute(account.id, account.isCreditCard)
            response.push(AccountResponseMapper.from(account, transactions))
        }
        res.status(200).send({ message: "User authenticated!" });        
    }
}