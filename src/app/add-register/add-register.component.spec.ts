import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterComponent } from './add-register.component';

describe('AddRegisterComponent', () => {
  let component: AddRegisterComponent;
  let fixture: ComponentFixture<AddRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
