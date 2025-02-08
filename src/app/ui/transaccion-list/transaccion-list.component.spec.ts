import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionListComponent } from './transaccion-list.component';

describe('TransaccionListComponent', () => {
  let component: TransaccionListComponent;
  let fixture: ComponentFixture<TransaccionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionListComponent]
    });
    fixture = TestBed.createComponent(TransaccionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
