export default class OpenFinanceURL {
    public static readonly  OPEN_FINANCE_URL_BASE = "http://localhost:3000";    
    public static readonly OPEN_FINANCE_DEBIT_ACCOUNTS_URL = `${OpenFinanceURL.OPEN_FINANCE_URL_BASE}/debit/accounts`   
    public static readonly OPEN_FINANCE_CREDIT_ACCOUNTS_URL = `${OpenFinanceURL.OPEN_FINANCE_URL_BASE}/credit/accounts`
    public static readonly OPEN_FINANCE_CREDIT_LIMITS_URL = `${OpenFinanceURL.OPEN_FINANCE_URL_BASE}/credit/accounts/{{account_id}}/limits`
    public static readonly OPEN_FINANCE_DEBIT_BALANCES_URL = `${OpenFinanceURL.OPEN_FINANCE_URL_BASE}debit/accounts/{{account_id}}/balances`
    public static readonly OPEN_FINANCE_CREDIT_TRANSACTIONS_URL = `${OpenFinanceURL.OPEN_FINANCE_URL_BASE}credit/accounts/{{account_id}}/transactions`
    public static readonly OPEN_FINANCE_DEBIT_TRANSACTIONS_URL = `${OpenFinanceURL.OPEN_FINANCE_URL_BASE}debit/accounts/{{account_id}}/transactions`

}