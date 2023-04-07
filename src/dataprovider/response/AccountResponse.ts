export interface AccountResponse {
    id: string;
    name: string;
    value: string;
    cardNumber: number;
    expiryDate: string;
    isCreditCard: boolean;
    limit: string | null;
}