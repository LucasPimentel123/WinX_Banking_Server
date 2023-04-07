import { MetaResponse } from "./MetaResponse";
import { LinksResponse } from "./LinksResponse";

export interface CreditAccountResponse {
    data: Array<CreditAccountDataResponse>
    links: LinksResponse
    meta: MetaResponse
}

export interface CreditAccountDataResponse {
    creditCardAccountId: string,
    brandName: string,
    companyCnpj: string,
    name: string,
    productType: string,
    productAdditionalInfo: string,
    creditCardNetwork: string,
    networkAdditionalInfo: string,
}