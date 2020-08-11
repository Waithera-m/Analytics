import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetyrevenueComponent } from './ninetyrevenue.component';

describe('NinetyrevenueComponent', () => {
  let component: NinetyrevenueComponent;
  let fixture: ComponentFixture<NinetyrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinetyrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinetyrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
