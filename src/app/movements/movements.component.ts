import { Component, OnInit } from '@angular/core';
import { AccountManagerService } from '../services/account-manager.service';
import { LocalStorageService } from 'ngx-webstorage';
import { IAccount, ICustomer } from '../entities/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionModalComponent } from '../ui/transaction-modal/transaction-modal.component';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  customer: ICustomer = this.storage.retrieve('customer');
  accounts: IAccount[] = [];
  selectedAccount?: any = null;

  constructor(private accountService: AccountManagerService, private storage: LocalStorageService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.accounts = this.customer.accounts;
  }

  selectAccount(event: Event) {
    console.log(event);
  }

  openTransactionModal() {
    const modalRef = this.modalService.open(TransactionModalComponent);
    modalRef.componentInstance.customer = this.customer;
  }

}
