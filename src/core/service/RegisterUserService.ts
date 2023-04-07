import { CreateUserRequest } from "../../entrypoint/request";
import { User } from '../../db/model'
import ErrorResponse from "../../config/ErrorResponse";

export default class RegisterUserService {
    public execute = async (user: CreateUserRequest) => {
        let userExists: any;
        await User.findOne({where: {cpf: user.cpf}}).then(userData => {
            userExists = userData;
        }).catch(err =>{ throw new ErrorResponse(503,"The server is unavailable to handle this request right now.") });

        if(!userExists){
            await User.create(user);
        }
        else{
            throw new ErrorResponse(409,"User already registered!");
        }
    }
}