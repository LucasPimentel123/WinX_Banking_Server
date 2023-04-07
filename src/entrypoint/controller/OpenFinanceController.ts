import BaseController from "./BaseController";
import { Request, Response, NextFunction } from 'express';
import { loginUserSchema } from '../validators/UserSchema'
import { LoginUserRequest } from "../request";
import TransactionService from "../../core/service/TransactionService";
import { AccountService } from "../../core/service";

export default class OpenFinanceController extends BaseController {

    public constructor(private readonly accountService: AccountService, private readonly transactionService: TransactionService){
        super();
    }

    public execute = async (req: Request, res: Response, next: NextFunction) => {
        this.validateRequest(loginUserSchema, req, res);
        const user: LoginUserRequest = req.body;

        await this.service.execute(user);

        res.status(200).send({ message: "User authenticated!" });        
    }
}