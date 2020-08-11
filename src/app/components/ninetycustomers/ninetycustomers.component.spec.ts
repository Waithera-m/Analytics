import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetycustomersComponent } from './ninetycustomers.component';

describe('NinetycustomersComponent', () => {
  let component: NinetycustomersComponent;
  let fixture: ComponentFixture<NinetycustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinetycustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinetycustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
