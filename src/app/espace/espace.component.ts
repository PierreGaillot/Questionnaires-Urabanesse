import { Component, OnInit } from '@angular/core';
import { Espace } from '../espace';



@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit {

  espace: Espace = {
    id: 45,
    user: "Habitant",
    color: "#93F084",
    color1: "#82E272",
    color2: "#72D462",
    color3: "#60BC51",
  };
  
  constructor() { }

  ngOnInit() {
  }

}
