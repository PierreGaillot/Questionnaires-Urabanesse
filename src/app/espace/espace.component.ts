import { Component, OnInit } from '@angular/core';
import { Espace } from '../espace';
import { QUESTIONNAIRES } from '../mock-questionnaires';
import { Router } from '@angular/router';


@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit {

  questionnaires = QUESTIONNAIRES;
  dashboardInfos = [
    { name: "Habitants inscrits", data: 64 },
    { name: "Questionnaires", data: 7 },
    { name: "Objectif", data: 73 + "%" },
    { name: "Questionnaires remplis", data: 164 },
  ]

  espace: Espace = {
    id: 45,
    user: "Habitant",
  };

  constructor(
  ) { }

  ngOnInit() {
  }


}
