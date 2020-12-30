import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquePresenceComponent } from './statistique-presence.component';

describe('StatistiquePresenceComponent', () => {
  let component: StatistiquePresenceComponent;
  let fixture: ComponentFixture<StatistiquePresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquePresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
