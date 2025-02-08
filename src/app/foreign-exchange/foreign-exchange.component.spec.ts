import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeComponent } from './foreign-exchange.component';

describe('ForeignExchangeComponent', () => {
  let component: ForeignExchangeComponent;
  let fixture: ComponentFixture<ForeignExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeignExchangeComponent]
    });
    fixture = TestBed.createComponent(ForeignExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
