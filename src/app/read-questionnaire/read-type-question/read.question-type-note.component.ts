import { Component, Input } from "@angular/core";
import { Question } from "src/app/questions/question.model";


@Component({
    selector: 'app-read-question-type-note',
    template: `
<div *ngIf="question.type === 'note'">
       
    <mat-slider
        thumbLabel
        [displayWith]="formatLabel"
        tickInterval="10"
        step="1"
        min="{{question.reponses[0]}}"
        max="{{question.reponses[1]}}"
        aria-label="units">
    </mat-slider>   

</div>

    `,

})

export class ReadQuestionTypeNote {
    @Input() question: Question;
}