import { ObjectSchema } from 'joi';
import { CreateUserRequest, LoginUserRequest } from '../request';
import Joi from 'joi';

const userRequestSchema: ObjectSchema<CreateUserRequest> = Joi.object().keys({
  name: Joi.string().required(),
  cpf: Joi.string().length(11).required(),
  password: Joi.string().required(),
})

const loginUserSchema: ObjectSchema<LoginUserRequest> = Joi.object().keys({
  cpf: Joi.string().length(11).required(),
  password: Joi.string().required(),
})

export {
    userRequestSchema,
    loginUserSchema
};