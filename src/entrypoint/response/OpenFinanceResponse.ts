export interface OpenFinanceResponse {
    name: string;
    value: number;
    cardNumber: number;
    expiryDate: string;
    isCreditCard: boolean;
    limit: number | null;
    transactions: Array<any>
}