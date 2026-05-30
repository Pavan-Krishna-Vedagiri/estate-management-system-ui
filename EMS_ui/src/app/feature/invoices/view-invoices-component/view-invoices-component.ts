import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Invoice } from '../../../shared/models/Invoice';
import { CommonApiService } from '../../../core/services/common-api-service';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { MarkAsPaidPop } from './mark-as-paid-pop/mark-as-paid-pop';

@Component({
  selector: 'app-view-invoices-component',
  imports: [
    AsyncPipe, DatePipe, CurrencyPipe, MarkAsPaidPop
  ],
  templateUrl: './view-invoices-component.html',
  styleUrl: './view-invoices-component.css',
})
export class ViewInvoicesComponent {

  invoices$ !: Observable<Invoice[]>;

  constructor(private apiService : CommonApiService){}

  ngOnInit(){
    this.invoices$ = this.apiService.get("/rent-invoices").pipe(
      map( response => response.data)
    )
  }
}
