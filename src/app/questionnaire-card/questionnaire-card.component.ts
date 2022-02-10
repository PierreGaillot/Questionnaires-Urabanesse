import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../ressources/questionnaire';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss']
})
export class QuestionnaireCardComponent implements OnInit {

  questionnaire: Questionnaire = {
    title: 'Le super Titre de mon SUPER questionnaire',
    details: '(les details de mon SUPER questionnaire)',
    theme: 'urbain',
    estimTemps: 15,
    nbQuestions: 8,
  }

  constructor() { }

  ngOnInit() {
  }

}
