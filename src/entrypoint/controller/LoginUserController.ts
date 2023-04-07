import BaseController from "./BaseController";
import { Request, Response, NextFunction } from 'express';
import { loginUserSchema } from '../validators/UserSchema'
import { LoginUserRequest } from "../request";
import LoginUserService from "../../core/service/LoginUserService";

export default class LoginUserController extends BaseController {

    public constructor(private readonly service: LoginUserService){
        super();
    }

    public execute = async (req: Request, res: Response, next: NextFunction) => {
        this.validateRequest(loginUserSchema, req, res);
        const user: LoginUserRequest = req.body;

        await this.service.execute(user);

        res.status(200).send({ message: "User authenticated!" });        
    }
}