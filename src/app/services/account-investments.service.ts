import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranscationType } from '../entities/enums';
import { IAccount } from '../entities/interfaces';
import { ICustomer } from '../entities/interfaces';

@Injectable({
  providedIn: 'root',
})
export class InvestmentManagerService {
  customers: ICustomer[] = [];

  constructor() {
      this.startInvestmentGrowth();
  }

  public addInvestment(
    customer: ICustomer,
    account: IAccount,
    amount: number,
    transactionType: TranscationType
  ): Observable<IAccount> {
    const porcentaje = 0.5;
    const idInvestment = Math.random().toString(36).substring(2, 9);
    const idTransaction = Math.random().toString(36).substring(2, 9);

    this.customers.push(customer);

    return new Observable((observer) => {
      // const newTransaction = {
      //   transactionId: idTransaction,
      //   accountId: account.accountId,
      //   amount: amount,
      //   transactionDate: new Date(),
      //   transactionType: transactionType,
      // };
      customer.investments.push({
        investmentId: idInvestment,
        balance: amount,
        transactions: [],
        investRate: porcentaje,
      })
      this.transactionsInvestment(customer, idInvestment, idTransaction, account, amount, transactionType).subscribe();
      this.startInvestmentGrowth();
      observer.next(account);
      observer.complete();
    });
  }

  public transactionsInvestment(
    customer: ICustomer,
    idInvestment: string,
    idTransaction: string,
    account: IAccount,
    amount: number,
    transactionType: TranscationType
  ): Observable<IAccount> {
    return new Observable(observer => {
      if (transactionType === TranscationType.DEPOSIT) {
        account.balance += amount;
      } else if (transactionType === TranscationType.WITHDRAW) {
        if (account.balance >= amount) {
          account.balance -= amount;
        } else {
          observer.error('Fondos insuficientes');
          return;
        }
      } else if (transactionType === TranscationType.TRANSFER) {
        if (account.balance >= amount) {
          account.balance -= amount;
        } else {
          observer.error('Fondos insuficientes');
          return;
        }
      }
      const iV = customer.investments.findIndex(i => i.investmentId === idInvestment);
      console.log(iV);
      const iT = customer.investments[iV].transactions.findIndex(i => i.transactionId === idTransaction);
      customer.investments[iV].transactions.push({
        transactionId: Math.random().toString(36).substring(2, 9),
        accountId: account.accountId,
        amount: amount,
        transactionDate: new Date(),
        transactionType: transactionType
      });
      console.log(customer.investments[iV]);
      observer.next(account);
      observer.complete();
    });
  }

  private startInvestmentGrowth() {
    setInterval(() => {
      console.log('Actualizando inversiones...');
      const allCustomers: ICustomer[] = this.customers;

      allCustomers.forEach((customer) => {
        customer.investments.forEach((investment) => {
          investment.balance += investment.balance * investment.investRate;
        });
      });
    }, 5000); // Cada 5 segundos
  }
}
