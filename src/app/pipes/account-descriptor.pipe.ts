import { Pipe, PipeTransform } from '@angular/core';
import { IAccount } from '../entities/interfaces';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'accountDescriptor'
})
export class AccountDescriptorPipe implements PipeTransform {

  transform(account: IAccount): string {
    return `${account.accountId} - ${account.accountName}`;
  }

}
