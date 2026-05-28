import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateResidentComponent } from './create-resident-component/create-resident-component';
import { ResidentRoutingModule } from './resident-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagingComponent } from '../../shared/paging-component/paging-component'



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    CreateResidentComponent,
    ResidentRoutingModule,
    ReactiveFormsModule,
    PagingComponent
  ]
})
export class ResidentModule { }
