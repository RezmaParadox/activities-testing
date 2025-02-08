import { Component, TemplateRef, ViewChild } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { IAccount, ICustomer } from 'src/app/entities/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-acc-detail-modal',
  templateUrl: './acc-detail-modal.component.html',
  styleUrls: ['./acc-detail-modal.component.scss']
})
export class AccDetailModalComponent {

  customer: ICustomer = this.storage.retrieve('customer');
  selectedAccount: IAccount | null = null;

  @ViewChild('content') contentTemplate!: TemplateRef<any>;

  constructor(private storage: LocalStorageService, private modalService: NgbModal){}
}
