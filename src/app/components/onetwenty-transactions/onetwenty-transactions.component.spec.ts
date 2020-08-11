import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetwentyTransactionsComponent } from './onetwenty-transactions.component';

describe('OnetwentyTransactionsComponent', () => {
  let component: OnetwentyTransactionsComponent;
  let fixture: ComponentFixture<OnetwentyTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetwentyTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetwentyTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
