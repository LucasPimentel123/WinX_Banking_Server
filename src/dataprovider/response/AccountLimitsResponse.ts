import { MetaResponse } from "./MetaResponse";
import { LinksResponse } from "./LinksResponse";

export interface AccountLimitsResponse {
    data: Array<AccountLimitsDataResponse>
    links: LinksResponse
    meta: MetaResponse
}

export interface AccountLimitsDataResponse {
    creditLineLimitType: string,
    consolidationType: string,
    identificationNumber: string,
    lineName: string,
    lineNameAdditionalInfo: string,
    isLimitFlexible: boolean,
    limitAmount: AccountLimitsAmountResponse,
    usedAmount: AccountLimitsAmountResponse,
    availableAmount: AccountLimitsAmountResponse,
}

export interface AccountLimitsAmountResponse {
    amount: string
    currency: string
}