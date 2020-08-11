import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetytransactionsComponent } from './ninetytransactions.component';

describe('NinetytransactionsComponent', () => {
  let component: NinetytransactionsComponent;
  let fixture: ComponentFixture<NinetytransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinetytransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinetytransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
