import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss']
})
export class NewQuestionnaireComponent implements OnInit {


  //* ------- INPUT Validator 
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);


  isEditNewQuestion: boolean = true;

  questions = [];


  constructor(
  ) { }

  ngOnInit() {

  }

  onQuestionAdded(questionData: { questionName: string, questionDetail: string, questionTheme: string, questionType: string }) {
    this.questions.push({
      name: questionData.questionName,
      detail: questionData.questionDetail,
      theme: questionData.questionTheme,
      type: questionData.questionType
    });
    this.isEditNewQuestion = false
  }

}
