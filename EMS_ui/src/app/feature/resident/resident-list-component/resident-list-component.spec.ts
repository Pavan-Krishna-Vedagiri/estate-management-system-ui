import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentListComponent } from './resident-list-component';

describe('ResidentListComponent', () => {
  let component: ResidentListComponent;
  let fixture: ComponentFixture<ResidentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
