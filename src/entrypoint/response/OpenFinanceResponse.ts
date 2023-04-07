export interface OpenFinanceResponse {
    name: string;
    value: string;
    cardNumber: number;
    expiryDate: string;
    isCreditCard: boolean;
    limit: string | null;
    transactions: Array<any>
}