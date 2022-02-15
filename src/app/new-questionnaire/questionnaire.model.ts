export class Questionnaire {
    public name: string;
    public detail: string;
    public questions: any;

    constructor(name: string, detail: string, questions: any) {
        this.name = name;
        this.detail = detail;
        this.questions = questions;
    }
}