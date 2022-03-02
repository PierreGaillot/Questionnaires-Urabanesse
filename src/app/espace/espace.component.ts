import { Component, OnInit } from '@angular/core';
import { Espace } from '../espace';
import { QUESTIONNAIRES } from '../mock-questionnaires';
import { Projet } from '../project/projet.model';
import { Questionnaire } from '../questionnaires/new-questionnaire/questionnaire.model';
import { themes } from '../ressources/theme.list';


@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit {

  questionnaires: Questionnaire[] = QUESTIONNAIRES;
  questionnaire: Questionnaire = QUESTIONNAIRES[2];
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


  projet: Projet = {
    title: 'FIVES',
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nam blanditiis qui rem itaque, debitis porro
  minima
  magni ratione dicta sint saepe, facilis perferendis tempore dolorum deserunt provident error? Blanditiis,
  veritatis
  esse sint iure tempore, soluta nisi ex quasi maxime minima cupiditate totam at doloribus? Iusto sed ad voluptate
  corporis harum soluta magni enim inventore neque quisquam, temporibus totam cupiditate autem cum tenetur eum.
  Facere
  tenetur sit odio asperiores quia! Consectetur tempora suscipit, optio voluptate consequuntur labore similique, rem
  ullam pariatur temporibus alias animi illum itaque accusamus vel. Repellat qui vel eveniet sit illo eligendi
  cupiditate dicta commodi, eius reprehenderit?
      
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam esse tempora, amet sequi consectetur praesentium explicabo atque excepturi unde dolor magni tempore delectus non fuga necessitatibus cupiditate iste commodi.`,
    dates: [
      { name: 'Début du projet', date: '2022-01-01T12:00:00-05:00' },
      { name: 'Analyse du projet', date: '2022-01-01T12:00:00-05:00' },
      { name: 'Début des travaux', date: '2022-01-01T12:00:00-05:00' },
      { name: 'fin du projet', date: '2022-01-01T12:00:00-05:00' },
    ],
    imgPath: `https://images.squarespace-cdn.com/content/5a5004c8f6576ea6cdceed2a/1611736996906-N7A6AQOMPKVSLQ08PCIH/HalleVue9_2611.jpg?format=1500w&content-type=image%2Fjpeg`,
    questionnaires: QUESTIONNAIRES
  }

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
