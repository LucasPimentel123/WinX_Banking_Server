import { MetaResponse } from "./MetaResponse";
import { LinksResponse } from "./LinksResponse";

export interface AccountBalanceResponse {
    data: Array<AccountBalanceDataResponse>
    links: LinksResponse
    meta: MetaResponse
}

export interface AccountBalanceDataResponse {
    availableAmount: AccountBalanceAmountResponse,
    blockedAmount: AccountBalanceAmountResponse,
    automaticallyInvestedAmount: AccountBalanceAmountResponse,
}

export interface AccountBalanceAmountResponse {
    amount: string
    currency: string
}