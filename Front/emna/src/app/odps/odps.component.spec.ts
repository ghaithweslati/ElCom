import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpsComponent } from './odps.component';

describe('OdpsComponent', () => {
  let component: OdpsComponent;
  let fixture: ComponentFixture<OdpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
