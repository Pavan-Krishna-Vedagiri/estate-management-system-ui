// rent-invoice.model.ts
export interface Invoice {
  invoiceId: string;
  bookingId: string;
  residentId: string;
  rentAmount: number;
  monthYear: string;
  dueDate: string;
  status: 'DUE' | 'PAID' | 'PARTIAL';
}
