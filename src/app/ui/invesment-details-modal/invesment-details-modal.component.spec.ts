import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesmentDetailsModalComponent } from './invesment-details-modal.component';

describe('InvesmentDetailsModalComponent', () => {
  let component: InvesmentDetailsModalComponent;
  let fixture: ComponentFixture<InvesmentDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvesmentDetailsModalComponent]
    });
    fixture = TestBed.createComponent(InvesmentDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
