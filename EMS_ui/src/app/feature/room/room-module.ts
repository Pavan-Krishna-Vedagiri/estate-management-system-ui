import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing-module';
import {ViewRoomsComponent } from './view-rooms-component/view-rooms-component'
import { CreateResidentComponent } from '../resident/create-resident-component/create-resident-component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ViewRoomsComponent,
    CreateResidentComponent    
  ]
})
export class RoomModule { }
