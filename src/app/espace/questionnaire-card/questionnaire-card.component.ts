import { Component, Input, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/questionnaires/new-questionnaire/questionnaire.model';
@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss']
})
export class QuestionnaireCardComponent implements OnInit {

  @Input() questionnaire?: Questionnaire;



  isAnswered: boolean;

  constructor(

  ) {
    this.isAnswered = Math.random() > 0.5 ? true : false;
  }

  ngOnInit() {
  }
}
