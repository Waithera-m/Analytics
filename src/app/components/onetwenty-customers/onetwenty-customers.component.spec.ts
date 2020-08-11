import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetwentyCustomersComponent } from './onetwenty-customers.component';

describe('OnetwentyCustomersComponent', () => {
  let component: OnetwentyCustomersComponent;
  let fixture: ComponentFixture<OnetwentyCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetwentyCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetwentyCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
