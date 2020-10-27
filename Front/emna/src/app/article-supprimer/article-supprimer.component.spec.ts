import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSupprimerComponent } from './article-supprimer.component';

describe('ArticleSupprimerComponent', () => {
  let component: ArticleSupprimerComponent;
  let fixture: ComponentFixture<ArticleSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
