import { Component, OnInit } from '@angular/core';
import { Espace } from '../espace';
import { QUESTIONNAIRES } from '../mock-questionnaires';



@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit {

  questionnaires = QUESTIONNAIRES;

  espace: Espace = {
    id: 45,
    user: "Habitant",
  };

  constructor() { }

  ngOnInit() {
  }

}
