import { AccountGateway } from "../../dataprovider/gateway";
import { AccountResponse } from "../../dataprovider/response/AccountResponse";

export default class AccountService {
    public constructor(private gateway: AccountGateway) {}
    public async execute(): Promise<AccountResponse[]>  {
        return await this.gateway.execute();
    }
}