import { ObjectSchema } from 'joi';
import { CreateUserRequest } from '../request';
import Joi from 'joi';

const userRequestSchema: ObjectSchema<CreateUserRequest> = Joi.object().keys({
  cpf: Joi.string().length(11).required(),
  password: Joi.string().required(),
})

export {
    userRequestSchema
};