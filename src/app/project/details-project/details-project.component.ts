import { Component, Input, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/questionnaires/new-questionnaire/questionnaire.model';
import { Projet } from '../projet.model';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.scss']
})
export class DetailsProjectComponent implements OnInit {

  @Input() projet:Projet;

  // dates = [
  //   { name: 'Début du projet', date: '2022-01-01T12:00:00-05:00' },
  //   { name: 'Fin des sondages', date: '2022-01-01T12:00:00-05:00' },
  //   { name: 'Début des travaux', date: '2022-01-01T12:00:00-05:00' },
  //   { name: 'Fin des travaux', date: '2022-01-01T12:00:00-05:00' }
  // ];

  constructor() { }

  ngOnInit() {
  }

}
