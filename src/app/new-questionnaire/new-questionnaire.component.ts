import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss']
})
export class NewQuestionnaireComponent implements OnInit {

  isEditNewQuestion: boolean = false;

  constructor(
  ) { }

  ngOnInit() {

  }

}
