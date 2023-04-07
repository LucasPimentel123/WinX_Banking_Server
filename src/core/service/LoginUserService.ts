import { LoginUserRequest } from "../../entrypoint/request";
import { User } from '../../db/model'
import ErrorResponse from "../../config/ErrorResponse";
import bcrypt from "bcrypt";

export default class LoginUserService {
    public execute = async (user: LoginUserRequest) => {
        let userValid: boolean = false;
        let userFinded: any;
        await User.findOne({where: {cpf: user.cpf }}).then(async userData => {
            userFinded = userData;
            if(userFinded){
                await bcrypt
                    .compare(user.password, userFinded.password)
                    .then(res => {
                        userValid = res
                    })
                    .catch(_err => {
                        throw new ErrorResponse(400,"Error to find user! Try again later!")
                    }) 
            }
            
        }).catch(_err =>{ throw new ErrorResponse(503,"The server is unavailable to handle this request right now.") });

        if(!userValid || !userFinded){
            throw new ErrorResponse(404,"User or password invalid!");
        }

        return userFinded
    }
}