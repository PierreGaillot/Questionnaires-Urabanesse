import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-question-item-list',
    templateUrl: "./question-item-list.component.html",
    styleUrls: ["./question-item-list.component.scss"]
})

export class QuestionItemListComponent {
    @Input() indexQuestion: number;
    @Input() question: { name: string, detail: string, theme: string };

    constructor() {
    }

}