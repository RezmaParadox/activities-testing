import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDetailModalComponent } from './acc-detail-modal.component';

describe('AccDetailModalComponent', () => {
  let component: AccDetailModalComponent;
  let fixture: ComponentFixture<AccDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccDetailModalComponent]
    });
    fixture = TestBed.createComponent(AccDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
