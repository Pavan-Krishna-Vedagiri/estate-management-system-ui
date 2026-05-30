export interface Payment {
    paymentId: string;
    invoiceId: string;
    residentId: string;
    amount: number;
    paymentDate: string;  // ISO date string
    method: string;
    status: string;
}
