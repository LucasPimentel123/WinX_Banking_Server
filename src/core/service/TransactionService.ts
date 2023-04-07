import { CreateUserRequest } from "../../entrypoint/request";
import { User } from '../../db/model'
import ErrorResponse from "../../config/ErrorResponse";
import TransactionGateway from "../../dataprovider/gateway/TransactionGateway";

export default class TransactionService {
    public constructor(private readonly gateway: TransactionGateway){}
    public async execute(accountId: string, isCredit: boolean){
        return await this.gateway.execute(accountId, isCredit);
    }
}