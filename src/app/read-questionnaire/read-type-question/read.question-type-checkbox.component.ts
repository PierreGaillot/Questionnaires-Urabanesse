import { Component, Input } from "@angular/core";
import { Question } from "../../questions/question.model";


@Component({
    selector:'app-read-question-type-checkbox',
    template:`
    <div *ngIf="question.type === 'checkbox'">
        <div *ngFor="let reponse of question.reponses">
            <div>
                <p><mat-checkbox>{{reponse}}</mat-checkbox></p>
            </div>    
        </div>
    </div>

    `,

})

export class ReadQuestionTypeCheckbox{
    @Input() question:Question;
}