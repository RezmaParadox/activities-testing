import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranscationType } from 'src/app/entities/enums';
import { ICustomer } from 'src/app/entities/interfaces';
import { InvestmentManagerService } from 'src/app/services/account-investments.service';


@Component({
  selector: 'app-investment-modal',
  templateUrl: './investment-modal.component.html',
  styleUrls: ['./investment-modal.component.scss']
})
export class InvestmentModalComponent {

    @Input('customer') customer?: ICustomer;

    form: FormGroup = this.formBuilder.group({
      fromAccount: [undefined, Validators.required],
      amount: [undefined, Validators.required]
    });

    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private investmentService: InvestmentManagerService) { }

    submitOperation() {

      const fromAccount = this.form.get('fromAccount')?.value;
      const amount = this.form.get('amount')?.value;

      this.investmentService.addInvestment( this.customer!, fromAccount, amount, TranscationType.WITHDRAW).subscribe({
        next: (fam) => {
          let index = this.customer!.accounts.findIndex(a => a.accountId === fam.accountId);
          this.customer!.accounts[index] = fam;
          this.activeModal.dismiss();
        },
        error: (error) => {
          alert(error);
        }
      });
    }
}
