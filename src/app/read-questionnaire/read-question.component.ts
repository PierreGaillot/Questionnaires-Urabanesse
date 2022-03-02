import { Component, Input } from "@angular/core";
import { Question } from "../questions/question.model";

@Component ({
    selector:'app-read-question',
    template:`
    <div class="question">
    <p class="index">question {{index}}/{{nbQuestions}}</p>
        <h2>{{ question.name }}</h2>
        <p>{{ question.detail }}</p>

        <app-read-question-type-radio [question]="question" index></app-read-question-type-radio>
        
        <app-read-question-type-checkbox [question]="question"></app-read-question-type-checkbox>
        
        <app-read-question-type-input [question]="question"></app-read-question-type-input>
        
        <app-read-question-type-note [question]="question"></app-read-question-type-note>
    </div>
    `,
    styles:[`
    .index{
        color:gray;
    }

    .question{
        background-color: #F5F5F5;
        margin:2em 0;
        padding:1em;
        border-left:3px solid gray;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        gap:0.5em;
    }

    @media screen and (max-width:415px){
        .question{
            margin:1em 0;
            padding:0.5em;
        }
    }
    `]
})


export class ReadQuestionComponent{

    @Input() question:Question;
    @Input() nbQuestions:number;
    @Input() index:number;
}