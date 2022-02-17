import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/questions/question.model';
import { themes } from 'src/app/ressources/theme.list';
import { Questionnaire } from '../new-questionnaire/questionnaire.model';


@Component({
  selector: 'app-questionnaire-item-list',
  templateUrl: './questionnaire-item-list.component.html',
  styleUrls: ['./questionnaire-item-list.component.scss']
})
export class QuestionnaireItemListComponent implements OnInit {

  @Input() questionnaire: Questionnaire;
  @Input() mainTheme: string;

  constructor(
  ) { }


  ngOnInit() {
  }

}
