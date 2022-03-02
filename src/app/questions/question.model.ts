export class Question {
    
    public name: string;
    public detail: string;
    public theme: string;
    public type: string;
    public reponses: any;

    constructor(name: string, detail: string, theme: string, type: string, reponses: any) {
        this.name = name;
        this.detail = detail;
        this.theme = theme;
        this.type = type;
        this.reponses = reponses;
    }
}
