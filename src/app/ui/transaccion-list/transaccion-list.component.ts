import { Component , Input } from '@angular/core';
import { ITransaction } from "src/app/entities/interfaces";

@Component({
  selector: 'transaction-list',
  templateUrl: './transaccion-list.component.html',
  styleUrls: ['./transaccion-list.component.scss']
})
export class TransaccionListComponent {
    @Input('transactions')
    transactions?: ITransaction[];
}
