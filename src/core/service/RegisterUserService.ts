import { CreateUserRequest } from "../../entrypoint/request";
import { User } from '../../db/model'
import ErrorResponse from "../../config/ErrorResponse";
import bcrypt from "bcrypt";

export default class RegisterUserService {
    public execute = async (user: CreateUserRequest) => {
        let userExists: any;
        await User.findOne({where: {cpf: user.cpf}}).then(userData => {
            userExists = userData;
        }).catch(_err =>{ throw new ErrorResponse(503,"The server is unavailable to handle this request right now.") });

        if(!userExists){
            const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
            await bcrypt
                .hash(user.password, salt)
                .then(async (passwordHashed) => { 
                    user.password = passwordHashed;
                    await User.create(user);
                 })
                .catch(err => { 
                    throw new ErrorResponse(400,"Error to save user! Try again later!") 
                });
        }
        else{
            throw new ErrorResponse(409,"User already registered!");
        }
    }
}