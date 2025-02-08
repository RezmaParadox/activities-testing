import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../entities/interfaces';

@Pipe({
  name: 'transactionsList'
})
export class TransactionsListPipe implements PipeTransform {

  transform(transactions: ITransaction): string {
    return 'hola' 
  }

}
