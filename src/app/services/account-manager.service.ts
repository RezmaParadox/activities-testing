import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranscationType } from '../entities/enums';
import { IAccount } from '../entities/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  constructor() { }

  public addTransaction(account: IAccount, amount: number, transactionType: TranscationType): Observable<IAccount> {
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
      account.transactions.push({
        transactionId: Math.random().toString(36).substring(2, 9),
        accountId: account.accountId,
        amount: amount,
        transactionDate: new Date(),
        transactionType: transactionType
      });
      observer.next(account);
      observer.complete();
    });
  }
}
