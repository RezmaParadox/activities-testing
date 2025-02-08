import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccDetailModalComponent } from './acc-detail-modal/acc-detail-modal.component';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransactionModalComponent } from './transaction-modal/transaction-modal.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InvestmentModalComponent } from './investment-modal/investment-modal.component';
import { InvesmentDetailsModalComponent } from './invesment-details-modal/invesment-details-modal.component';



@NgModule({
  declarations: [
    AccountCardComponent,
    AccDetailModalComponent,
    TransaccionListComponent,
    TransactionModalComponent,
    InvestmentModalComponent,
    InvesmentDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AccountCardComponent,
    TransaccionListComponent,
    InvesmentDetailsModalComponent
  ]
})
export class UiModule { }
