import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCashflowComponent } from './display-cashflow.component';

describe('DisplayCashflowComponent', () => {
  let component: DisplayCashflowComponent;
  let fixture: ComponentFixture<DisplayCashflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCashflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
