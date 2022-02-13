import { Component, OnInit } from '@angular/core';

interface Theme {
  value: string;
}

interface Type {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})

export class NewQuestionComponent implements OnInit {

  typeChoose: any;

  themes: Theme[] = [
    { value: 'urbanisme' },
    { value: 'environnement' },
    { value: 'quartier' },
    { value: 'civisme' },
  ]

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
}
