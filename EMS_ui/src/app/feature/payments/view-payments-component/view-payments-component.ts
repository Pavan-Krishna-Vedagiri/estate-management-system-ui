import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Payment } from '../../../shared/models/Payment';
import { CommonApiService } from '../../../core/services/common-api-service';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-payments-component',
  imports: [ AsyncPipe, DatePipe, CurrencyPipe ],
  templateUrl: './view-payments-component.html',
  styleUrl: './view-payments-component.css',
})
export class ViewPaymentsComponent {

  payments$ !: Observable<Payment[]>;

  constructor(private apiService : CommonApiService){}

  ngOnInit(){
    this.payments$ = this.apiService.get("/payments").pipe(
      map ( response => response.data)
    );
  }
}
