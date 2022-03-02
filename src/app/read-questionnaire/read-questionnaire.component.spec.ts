import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuestionnaireComponent } from './read-questionnaire.component';

describe('ReadQuestionnaireComponent', () => {
  let component: ReadQuestionnaireComponent;
  let fixture: ComponentFixture<ReadQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
