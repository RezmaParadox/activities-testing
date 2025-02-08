import { Component } from '@angular/core';
import { IAccount, ICustomer, IInvest } from '../entities/interfaces';
import { AccountManagerService } from '../services/account-manager.service';
import { LocalStorageService } from 'ngx-webstorage';
import { TransactionModalComponent } from '../ui/transaction-modal/transaction-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvestmentModalComponent } from '../ui/investment-modal/investment-modal.component';
import { InvesmentDetailsModalComponent } from '../ui/invesment-details-modal/invesment-details-modal.component';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {
    customer: ICustomer = this.storage.retrieve('customer');
    accounts: IAccount[] = [];
    selectedAccount?: IAccount;

    constructor(private accountService: AccountManagerService, private storage: LocalStorageService, private modalService: NgbModal) { }

    ngOnInit(): void {
      this.accounts = this.customer.accounts;
    }

    selectAccount(event: Event) {
      console.log(event);
    }

    openDetailsModal(invesment: IInvest) {
      const modalRef = this.modalService.open(InvesmentDetailsModalComponent);
      modalRef.componentInstance.selectedInvestment = invesment;
    }

    openTransactionModal() {
      const modalRef = this.modalService.open(InvestmentModalComponent);
      modalRef.componentInstance.customer = this.customer;
    }
}
