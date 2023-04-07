export interface AccountResponse {
    name: string;
    value: number;
    cardNumber: number;
    expiryDate: string;
    isCreditCard: boolean;
    limit: number | null;
}