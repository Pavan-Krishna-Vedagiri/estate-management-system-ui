import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomDetailComponent } from './view-room-detail-component';

describe('ViewRoomDetailComponent', () => {
  let component: ViewRoomDetailComponent;
  let fixture: ComponentFixture<ViewRoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRoomDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRoomDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
