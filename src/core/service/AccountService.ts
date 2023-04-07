import { AccountGateway } from "../../dataprovider/gateway";

export default class AccountService {
    public constructor(private gateway: AccountGateway) {}
    public execute = async () => {
        const accountsGatewayResponse = await this.gateway.execute();
    }
}