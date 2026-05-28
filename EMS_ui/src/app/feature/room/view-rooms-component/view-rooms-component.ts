import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Room } from "../../../shared/models/Room";
import { CommonApiService } from '../../../core/services/common-api-service';
import { AsyncPipe, NgClass } from '@angular/common';
import { RoomBooking } from '../../../shared/models/RoomBooking'
import { Resident } from '../../../shared/models/Resident';
import { Router } from '@angular/router';
import { CreateResidentComponent } from '../../resident/create-resident-component/create-resident-component';

@Component({
  selector: 'app-view-rooms',
  imports: [AsyncPipe, CreateResidentComponent, NgClass],
  templateUrl: './view-rooms-component.html',
  styleUrl: './view-rooms-component.css'
})
export class ViewRoomsComponent {

  rooms$ !: Observable<Room[]>
  showForm: boolean = false;
  roomId !: string;

  constructor(
    private commonApiService: CommonApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadResidents();
  }

  loadResidents() {
    this.rooms$ = this.commonApiService.get("/rooms").pipe(
      map((data: any) => data.data as Room[])
    );
  }

  getBookingDetail(roomId: string) {
    this.router.navigate([`/rooms/${roomId}`]);
  }

  bookRoom(roomId: string) {
    this.showForm = true;
    this.roomId = roomId;
  }

  completeBookRoom(eventValue: Resident) {
    alert(eventValue.firstName + " booked " + this.roomId);
    const params = { "roomId": this.roomId };
    const url = `/rooms/${this.roomId}/book-room`;
    const resident = eventValue;
    this.commonApiService.post(url, resident, params).subscribe(
      {
        next: (data: any) => {
          alert(data.data);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/rooms']);
          });
        }
      }
    )
    this.showForm = false;
  }
}
