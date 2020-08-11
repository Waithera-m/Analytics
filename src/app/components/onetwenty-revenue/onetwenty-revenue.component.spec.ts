import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetwentyRevenueComponent } from './onetwenty-revenue.component';

describe('OnetwentyRevenueComponent', () => {
  let component: OnetwentyRevenueComponent;
  let fixture: ComponentFixture<OnetwentyRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetwentyRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetwentyRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
