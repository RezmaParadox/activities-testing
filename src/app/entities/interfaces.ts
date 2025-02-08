import { TranscationType } from "./enums";

export interface ICustomer {
  name: string;
  lastName: string;
  customerId: string;
  email: string;
  accounts: IAccount[];
  investments: IInvest[];
}

export interface IAccount {
  accountId: string;
  customerId: string;
  accountName: string;
  balance: number;
  currency: string;
  transactions: ITransaction[];
}

export interface ITransaction {
  transactionId: string;
  accountId: string;
  amount: number;
  transactionDate: Date;
  transactionType: TranscationType;
}

export interface IInvest {
  investmentId: string;
  balance: number;
  transactions: ITransaction[];
  investRate: number;
}
