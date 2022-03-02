import { Component, Input, OnInit } from '@angular/core';
import { Questionnaire } from '../questionnaires/new-questionnaire/questionnaire.model';

@Component({
  selector: 'app-read-questionnaire',
  templateUrl: './read-questionnaire.component.html',
  styleUrls: ['./read-questionnaire.component.scss']
})
export class ReadQuestionnaireComponent implements OnInit {

  @Input() questionnaire:Questionnaire;

  constructor() { }

  ngOnInit() {
  }

}
