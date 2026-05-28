import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop',
  imports: [],
  templateUrl: './pop-up-compoonent.html',
  styleUrl: './pop-up-compoonent.css',
})
export class PopUpCompoonent {

  @Input() message !: string;
  showPop : boolean = false;
  
  @Output() closePopUp = new EventEmitter<boolean>();

  closePopup(){
    this.closePopUp.emit(this.showPop);
  }

}
