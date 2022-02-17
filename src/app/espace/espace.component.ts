import { Component, OnInit } from '@angular/core';
import { Espace } from '../espace';
import { QUESTIONNAIRES } from '../mock-questionnaires';
import { Questionnaire } from '../questionnaires/new-questionnaire/questionnaire.model';
import { themes } from '../ressources/theme.list';


@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit {

  questionnaires: Questionnaire[] = QUESTIONNAIRES;
  dashboardInfos = [
    { name: "Habitants inscrits", data: 64 },
    { name: "Questionnaires", data: this.questionnaires.length },
    { name: "Objectif", data: 73 + "%" },
    { name: "Questionnaires remplis", data: 164 },
  ]

  espace: Espace = {
    id: 45,
    user: "Habitant",
  };



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

  constructor(
  ) { }

  ngOnInit() {
  }

}
