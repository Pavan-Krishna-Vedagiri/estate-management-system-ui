import { Address } from './Address';

export interface Resident {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhoneNumber: string;
  socialSecurityNumber: string;
  occupationName: string;
  companyName: string;
  address: Address;
}
