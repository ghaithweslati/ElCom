import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatriceComponent } from './operatrice.component';

describe('OperatriceComponent', () => {
  let component: OperatriceComponent;
  let fixture: ComponentFixture<OperatriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
