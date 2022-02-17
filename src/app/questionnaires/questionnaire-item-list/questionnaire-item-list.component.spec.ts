import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireItemListComponent } from './questionnaire-item-list.component';

describe('QuestionnaireItemListComponent', () => {
  let component: QuestionnaireItemListComponent;
  let fixture: ComponentFixture<QuestionnaireItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
