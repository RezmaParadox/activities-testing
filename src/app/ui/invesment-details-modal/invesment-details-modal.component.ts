import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'ngx-webstorage';
import { ICustomer, IInvest } from 'src/app/entities/interfaces';

@Component({
  selector: 'app-invesment-details-modal',
  templateUrl: './invesment-details-modal.component.html',
  styleUrls: ['./invesment-details-modal.component.scss']
})
export class InvesmentDetailsModalComponent {
  @Input('selectedInvestment') selectedInvestment?: IInvest;

  constructor( public activeModal: NgbActiveModal, private localStorage: LocalStorageService) { }

}
