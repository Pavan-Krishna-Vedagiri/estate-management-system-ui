import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth-service';
import { Router } from '@angular/router';
import { CommonApiService } from '../../core/services/common-api-service';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Resident } from '../../shared/models/Resident';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardComponent {

  totalResidents$ !: Observable<string>;
  pendingRequests = 8;
  revenue$ !: Observable<string>;

  constructor(private apiService: CommonApiService) { }

  ngOnInit() {
    this.totalResidents$ = this.apiService.get('/residents/total-residents')
    .pipe(map(
      response => response.data
    ));

    this.revenue$ = this.apiService.get('/bookings/total-revenue')
    .pipe(map(
      response => response.data
    ))
  }
}
