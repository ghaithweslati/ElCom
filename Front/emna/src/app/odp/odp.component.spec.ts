import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpComponent } from './odp.component';

describe('OdpComponent', () => {
  let component: OdpComponent;
  let fixture: ComponentFixture<OdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
