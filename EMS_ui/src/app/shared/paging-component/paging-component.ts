import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { PagingTo } from '../models/PagingTo';

@Component({
  selector: 'app-paging-component',
  imports: [],
  templateUrl: './paging-component.html',
  styleUrl: './paging-component.css',
})
export class PagingComponent {

  @Input() pageDetail !: PagingTo
  @Output() sendPageDetail : EventEmitter<PagingTo> = new EventEmitter<PagingTo>();

  constructor(){
  }

  sendPageDetailFn(updates : Partial<PagingTo>){
    this.sendPageDetail.emit({
      ...this.pageDetail,
      ...updates
    });
  }
}
