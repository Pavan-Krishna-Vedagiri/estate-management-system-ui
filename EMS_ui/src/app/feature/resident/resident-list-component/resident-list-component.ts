import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Resident } from '../../../shared/models/Resident';
import { AuthService } from '../../../core/auth/auth-service';
import { Router } from '@angular/router';
import { CommonApiService } from '../../../core/services/common-api-service';
import { AsyncPipe } from '@angular/common';
import { PagingTo } from '../../../shared/models/PagingTo';
import { PagedResponse } from '../../../shared/models/PagedResponse';
import { PagingComponent } from '../../../shared/paging-component/paging-component';

@Component({
  selector: 'app-resident-list-component',
  imports: [ AsyncPipe, PagingComponent],
  templateUrl: './resident-list-component.html',
  styleUrl: './resident-list-component.css',
})
export class ResidentListComponent {

  pagedResponse$ !: Observable<PagedResponse<Resident>>;
  test: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private commonApiService: CommonApiService
  ) { }

  ngOnInit() {
    let page : PagingTo = {
      pageNumber : 0,
      pageSize : 10,
      totalElements : 0,
      totalPages : 0
    }
    this.getResidents(page);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  getResidents(pageDetail : PagingTo) {

    this.pagedResponse$ = this.commonApiService.get("/residents", pageDetail).pipe(
      map( response => response.data)
    );
  }

  getResident(id: string) {
    this.router.navigate([`/residents/view/${id}`]);
  }

  navigateCreateResident() {
    this.router.navigate(['/residents/create'])
  }
}
