import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/questions/question.model';
import { Questionnaire } from 'src/app/questionnaires//new-questionnaire/questionnaire.model'
import { themes } from 'src/app/ressources/theme.list';

@Component({
  selector: 'app-detail-questionnaire',
  templateUrl: './detail-questionnaire.component.html',
  styleUrls: ['./detail-questionnaire.component.scss']
})
export class DetailQuestionnaireComponent implements OnInit {

  questionnaire: Questionnaire =
    {
      name: "Monsieur le questionnaire !",
      detail: 'Les details qui vont avec ... ',
      questions: [
        {
          name: 'Que pensez-vous des jeunes qui restent en bas des immeubles ?',
          detail: 'des jeunes de moins de 20 ans',
          theme: 'urbain',
          type: 'radio',
          reponses: [
            'ils sont sympas',
            'je ne les aimes pas !',
            'ils me sont totalement indifferent'
          ]
        },
        {
          name: 'Que pensez-vous des vieux qui font le courses le dimanche',
          detail: 'ils font tous ça !',
          theme: 'civisme', type: 'checkbox',
          reponses: [
            'ils sont sympas',
            'je ne les aimes pas !',
            'ils me sont totalement indifferent',
            'ils cassent les couilles'
          ]
        },
        {
          name: 'Que pensez-vous de votre quatier ?',
          detail: 'donnez votre avis',
          theme: 'civisme',
          type: 'input',
          reponses: [
            'en quelques mots.'
          ]
        },
      ]
    };

  // questions: Question[] = [];

  constructor() { }

  ngOnInit() {
  }
  principalTheme = this.themesQuestionnaireSort(this.questionnaire)[0].name

  themesQuestionnaireSort(questionnaire: Questionnaire) {
    let themesData: any = []

    themes.forEach(theme => {
      let themeData = { name: theme, value: 0 }
      themesData.push(themeData);
    });

    questionnaire.questions.forEach(question => {
      if (question.theme) {
        themesData.forEach(themeData => {
          if (question.theme === themeData.name) {
            themeData.value += 1;
          }
        });
      }
    });
    console.log(themesData)

    themesData.sort(function (a, b) {
      return b.value - a.value;
    });
    return themesData
  }

}

