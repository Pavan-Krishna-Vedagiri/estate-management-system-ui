import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPaymentsComponent } from './view-payments-component/view-payments-component';
import { PaymentsRoutingModule } from './payments-rounting-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewPaymentsComponent,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
