import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


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

  @Output() questionCreated = new EventEmitter<{ questionName: string, questionDetail: string, questionTheme: string, questionType: string }>();

  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  detailFormControl = new FormControl('');
  themeFormControl = new FormControl('');
  typeFormControl = new FormControl('', [Validators.required]);

  nameForm: string;
  typeChoose: any;
  minNote: any;
  maxNote: any;

  reponses = ['Réponse 1', 'Réponse 2', 'Réponse 3'];
  selectedTheme: Theme;


  themes: Theme[] = [
    { value: 'urbanisme' },
    { value: 'environnement' },
    { value: 'quartier' },
    { value: 'civisme' },
  ];

  questions = [];

  types: Type[] = [
    { value: 'radio', viewValue: 'Une seule reponse possible' },
    { value: 'checkbox', viewValue: 'Une où plusieurs reponses possibles' },
    { value: 'boolean', viewValue: 'Oui où non, vrai ou faux ...' },
    { value: 'inputText', viewValue: 'Un champ de texte' },
    { value: 'note', viewValue: 'Une note entre deux valeurs' },
  ]


  constructor() {

  }

  ngOnInit() {
  };

  assignTypeChoose(event: Event) {
    this.typeChoose = event;
  }


  addReponse(i: number) {
    this.reponses.push("Réponse " + (this.reponses.length + 1))
  }

  deleteReponse(i: number) {
    console.log(this.reponses.splice(i, 1))
  }

  submitQuestion() {
    this.questionCreated.emit({ questionName: this.nameFormControl.value, questionDetail: this.detailFormControl.value, questionTheme: this.themeFormControl.value, questionType: this.typeFormControl.value })
  }
}
