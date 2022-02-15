export class Question {
    public name: string;
    public detail: string;
    public theme: string;
    public type: string;

    constructor(name: string, detail: string, theme: string, type: string) {
        this.name = name;
        this.detail = detail;
        this.theme = theme;
        this.type = type;
    }
}
