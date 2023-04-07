import { MetaResponse } from "./MetaResponse";
import { LinksResponse } from "./LinksResponse";

export interface DebitAccountResponse {
    data: Array<DebitAccountDataResponse>
    links: LinksResponse
    meta: MetaResponse
}

export interface DebitAccountDataResponse {
    brandName: string,
    companyCnpj: string,
    type: string,
    compeCode: string,
    branchCode: string,
    number: string,
    checkDigit: string,
    accountId: string,
}