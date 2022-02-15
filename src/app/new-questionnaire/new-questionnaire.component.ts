import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss']
})
export class NewQuestionnaireComponent implements OnInit {


  //* ------- INPUT Validator 
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  detailFormControl = new FormControl('');


  isEditNewQuestion: boolean = true;

  questions = [];
  questionnaires = [];


  constructor(
  ) { }

  ngOnInit() {

  }

  onQuestionAdded(questionData: { questionName: string, questionDetail: string, questionTheme: string, questionType: string, questionReponses: any }) {
    this.questions.push({
      name: questionData.questionName,
      detail: questionData.questionDetail,
      theme: questionData.questionTheme,
      type: questionData.questionType,
      reponses: questionData.questionReponses
    });
    this.isEditNewQuestion = false
    console.log(this.questions)
  }

  sendQuestionnaire() {
    this.questionnaires.push({
      name: this.nameFormControl.value,
      detail: this.detailFormControl.value,
      question: this.questions
    })
    console.log(this.questionnaires)
  }

}
