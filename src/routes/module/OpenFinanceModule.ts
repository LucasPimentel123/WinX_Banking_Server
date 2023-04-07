import OpenFinanceController from "../../entrypoint/controller/OpenFinanceController";
import TransactionService from "../../core/service/TransactionService";
import TransactionGateway from "../../dataprovider/gateway/TransactionGateway";

export const OpenFinanceModule = (): OpenFinanceController => {
    const transactionGateway = new TransactionGateway();
    const transactionService = new TransactionService(transactionGateway);

    return new OpenFinanceController(null, transactionService);
}