import { ChangeDetectorRef, Component } from '@angular/core';
import { Resident } from '../../../../shared/models/Resident';
import { Room } from '../../../../shared/models/Room';
import { CommonApiService } from '../../../../core/services/common-api-service';
import { ActivatedRoute } from '@angular/router';
import { RoomBooking } from '../../../../shared/models/RoomBooking';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-view-room-detail-component',
  imports: [AsyncPipe],
  templateUrl: './view-room-detail-component.html',
  styleUrl: './view-room-detail-component.css',
})
export class ViewRoomDetailComponent {

  room$ !: Observable<Room>;
  residents$ !: Observable<Resident[]>;

  constructor(
    private apiService: CommonApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.room$ = this.route.paramMap.pipe(
      switchMap(params => {
        const roomId = params.get('roomId')!;
        return this.apiService.get(`/rooms/${roomId}`).pipe(
          map((res: any) => res.data as Room)
        );
      })
    );

    this.residents$ = this.route.paramMap.pipe(
      switchMap(params => {
        const roomId = params.get('roomId')!;
        return this.apiService.get(`/bookings/${roomId}`).pipe(
          switchMap((res: any) => {
            if (res.data) {

              const bookings: RoomBooking[] = res.data;
              const residentCalls = bookings.map(b =>
                this.apiService.get(`/residents/${b.residentId}`)
              );
              return forkJoin(residentCalls).pipe(
                map(residentsData => residentsData.map(r => r.data as Resident))
              );
            }else{
              return of([] as Resident[])
            }
          })
        );
      })
    );
  }

}
