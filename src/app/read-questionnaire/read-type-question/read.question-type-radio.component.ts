import { Component, Input } from "@angular/core";
import { Question } from "src/app/questions/question.model";


@Component({
    selector:'app-read-question-type-radio',
    template:`
    <div *ngIf="question.type === 'radio'">
        <div *ngFor="let reponse of question.reponses">
            <div>
                <p><mat-radio-button>{{reponse}}</mat-radio-button></p>
            </div>    
        </div>
    </div>

    `,

})

export class ReadQuestionTypeRadio{
    @Input() question:Question;
}