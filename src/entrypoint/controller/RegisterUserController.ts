import { Request, Response, NextFunction } from 'express';
import BaseController from './BaseController';
import { CreateUserRequest } from '../request';
import { userRequestSchema } from '../validators/UserSchema'
import { RegisterUserService } from '../../core/service';

export default class RegisterUserController extends BaseController {

    public constructor(private readonly service: RegisterUserService){
        super();
    }

    public execute = async (req: Request, res: Response, next: NextFunction) => {
        this.validateRequest(userRequestSchema, req, res);
        const user: CreateUserRequest = req.body;

        await this.service.execute(user);

        res.status(201).send({ message:"User created!" });        
    }
}