import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Theme {
  value: string;
}

interface Type {
  value: string;
  viewValue: string;
}

interface Question {
  name: string;
  details: string;
  theme: string;
  type: string;
  reponses: any;
}


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})

export class NewQuestionComponent implements OnInit {

  typeChoose: any;
  reponses = ['Réponse 1', 'Réponse 2', 'Réponse 3'];

  themes: Theme[] = [
    { value: 'urbanisme' },
    { value: 'environnement' },
    { value: 'quartier' },
    { value: 'civisme' },
  ];

  questions: Question[] = [
    { name: 'string', details: 'string', theme: 'Theme', type: 'string', reponses: ['Réponse 1', 'Réponse 2', 'Réponse 3'] }
  ];

  types: Type[] = [
    { value: 'radio', viewValue: 'Une seule reponse possible' },
    { value: 'checkbox', viewValue: 'Une où plusieurs reponses possibles' },
    { value: 'boolean', viewValue: 'Oui où non, vrai ou faux ...' },
    { value: 'inputText', viewValue: 'Un champ de texte' },
    { value: 'note', viewValue: 'Une note entre deux valeurs' },
  ]


  constructor() { }

  ngOnInit() {
  };

  assignTypeChoose(event: Event) {
    console.log(event);
    this.typeChoose = event;
  }

  addReponse(i: number) {
    this.reponses.push("Réponse " + (this.reponses.length + 1))
  }

  deleteReponse(i: number) {

    console.log(this.reponses.splice(i, 1))
  }
}
