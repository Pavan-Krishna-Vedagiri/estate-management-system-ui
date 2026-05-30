import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAsPaidPop } from './mark-as-paid-pop';

describe('MarkAsPaidPop', () => {
  let component: MarkAsPaidPop;
  let fixture: ComponentFixture<MarkAsPaidPop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkAsPaidPop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkAsPaidPop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
