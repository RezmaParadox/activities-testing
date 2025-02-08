import { Pipe, PipeTransform } from '@angular/core';
import { TranscationType } from '../entities/enums';
@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: TranscationType): string {
    switch (value) {
      case TranscationType.DEPOSIT:
        return 'Depósito';
      case TranscationType.WITHDRAW:
        return 'Retiro';
      case TranscationType.TRANSFER:
        return 'Transferencia';
      default:
        return 'Desconocido';
    }
  }

}
