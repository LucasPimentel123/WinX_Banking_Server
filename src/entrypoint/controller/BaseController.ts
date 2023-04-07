import { Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import ErrorResponse from '../../config/ErrorResponse'; 

export default class BaseController {
    public validateRequest = (schema: ObjectSchema, req: Request,res: Response) => {
        const result = schema.validate(req.body);

        if (result.error) {
            throw new ErrorResponse(422, result.error.message);
        }
    }
}