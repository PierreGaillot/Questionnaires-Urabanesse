import { Component, Input } from "@angular/core";
import { Question } from "src/app/questions/question.model";


@Component({
    selector:'app-read-question-type-input',
    template:`
    <div *ngIf="question.type === 'input'">
        <div>
            <p>{{reponse}}</p> 
        </div>    
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Email</mat-label>
            <input type="text" matInput  placeholder="votre réponse ...">
        </mat-form-field>
    </div>

    `,

})

export class ReadQuestionTypeInput{
    @Input() question:Question;
}