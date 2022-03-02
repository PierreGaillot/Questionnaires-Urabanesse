import { Questionnaire } from "../questionnaires/new-questionnaire/questionnaire.model";

export class Projet {
    
    public title: string;
    public details: string;
    public dates: any[];
    public imgPath: string;
    public questionnaires: Questionnaire[];

    constructor(title:string, details:string, dates:any[], imgPath:string, questionnaires:Questionnaire[]) {
        this.title = title;
        this.details = details;
        this.dates = dates;
        this.imgPath = imgPath;
        this.questionnaires = questionnaires;
    }
}