import BaseController from "./BaseController";
import { Request, Response, NextFunction } from 'express';
import { loginUserSchema } from '../validators/UserSchema'
import { LoginUserRequest } from "../request";
import LoginUserService from "../../core/service/LoginUserService";
import { User } from "../../db/model";

export default class LoginUserController extends BaseController {

    public constructor(private readonly service: LoginUserService){
        super();
    }

    public execute = async (req: Request, res: Response, next: NextFunction) => {
        this.validateRequest(loginUserSchema, req, res);
        const user: LoginUserRequest = req.body;

        const userFinded: User = await this.service.execute(user);

        res.status(200).send({ name: userFinded.name, cpf: userFinded.cpf });        
    }
}