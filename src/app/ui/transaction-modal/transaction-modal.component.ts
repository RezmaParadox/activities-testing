import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICustomer } from '../../entities/interfaces';
import { AccountManagerService } from 'src/app/services/account-manager.service';
import { TranscationType } from 'src/app/entities/enums';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent {

  @Input('customer') customer?: ICustomer;

  form: FormGroup = this.formBuilder.group({
    fromAccount: [undefined, Validators.required],
    toAccount: [undefined, Validators.required],
    amount: [undefined, Validators.required]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private accountService: AccountManagerService) { }

  submitOperation() {
    const fromAccount = this.form.get('fromAccount')?.value;
    const toAccount = this.form.get('toAccount')?.value;
    const amount = this.form.get('amount')?.value;

    this.accountService.addTransaction(fromAccount, amount, TranscationType.TRANSFER).subscribe({
      next: (fam) => {
        this.accountService.addTransaction(toAccount, amount, TranscationType.DEPOSIT).subscribe({
          next: (tam) => {
            this.customer!.accounts = [fam, tam];
            this.activeModal.dismiss();
          },
          error: (error) => {
            alert(error);
          }
        });
      },
      error: (error) => {
        alert(error);
      }
    });
  }
}
