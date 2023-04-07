import OpenFinanceController from "../../entrypoint/controller/OpenFinanceController";
import { AccountService, TransactionService } from "../../core/service";
import { AccountGateway, TransactionGateway } from "../../dataprovider/gateway";

export const openFinanceModule = (): OpenFinanceController => {
    const transactionGateway = new TransactionGateway();
    const transactionService = new TransactionService(transactionGateway);

    const accountGateway = new AccountGateway();
    const accountService = new AccountService(accountGateway);

    return new OpenFinanceController(accountService, transactionService);
}