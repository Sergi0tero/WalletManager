import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowSummaryComponent } from './cashflow-summary.component';

describe('CashflowSummaryComponent', () => {
  let component: CashflowSummaryComponent;
  let fixture: ComponentFixture<CashflowSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashflowSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashflowSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
