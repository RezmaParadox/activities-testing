import { Component, ViewChild, inject, TemplateRef, effect } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { IAccount, ICustomer } from '../entities/interfaces';
import { AccountManagerService } from '../services/account-manager.service';
import { TranscationType } from '../entities/enums';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent {
  private modalService = inject(NgbModal);
  selectedAccount: IAccount | null = null;
  transaccion: TranscationType | null = null;
  customer: ICustomer = this.storage.retrieve('customer');
  @ViewChild('content') contentTemplate!: TemplateRef<any>;

  operation = {
    fromAccount: '',
    toAccount: '',
    balance: 0,
    movementType: TranscationType.DEPOSIT,
    amount: 0,
  };

  constructor(private storage: LocalStorageService, private AccountManagerService: AccountManagerService) {
     effect(() => {
      console.log(this.customer.accounts);
     });
   }

  openBankOperationModal(content: TemplateRef<any>) {

    //this.AccountManagerService.addTransaction(this.selectedAccount, 200, );

    this.operation = {
      fromAccount: '', //aquí se podría utilizar el selectedAccount para hacer la transferencia
      toAccount: '',
      balance: 0,
      movementType: TranscationType.DEPOSIT,
      amount: 0,
    };
    this.modalService.open(content, { size: 'lg' });
  }

  submitOperation() {
    console.log('Operación:', this.operation);



    this.operation = {
      fromAccount: '',
      toAccount: '',
      balance: 0,
      movementType: TranscationType.DEPOSIT,
      amount: 0,
    };
    this.modalService.dismissAll();
  }

  showDetails(account: IAccount) {
    this.selectedAccount = account;
    this.modalService.open(this.contentTemplate);
  }
}
