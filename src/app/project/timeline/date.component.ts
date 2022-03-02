import { Component, Input } from "@angular/core";

@Component({
    selector:'app-date',
    template:`
    <div class="cont-date">
        <div class="circle"></div>
        <p class="cont-date-name">{{date.name}}</p>
        <p class="cont-date-date">{{date.date}}</p>
    </div>
    `,
    styles:[
    `
    .cont-date{
        position: relative;
        border-left: 2px solid gray;
        padding-left: 2em;
        margin-left: 2em;
    }
    
    .circle{
        position: absolute;
        background-color: gray;
        border: 0.5em solid rgb(190, 190, 190);
        border-radius: 100%;
        height: 1em;
        width: 1em;
        top: 0em;
        left: -1em;
        transition: border 0.2s;
    }
    .circle:hover{
        border: 0.5em solid rgba(190, 190, 190, 0);
    }
    
    .cont-date-name{
        font-size: 1.25em;
    }
    
    .cont-date-date{
        font-size: 1em;
        color: gray;
        padding-bottom: 2em;
    }
    
    @media screen and (max-width:415px){
        .circle{
            border: 0.25em solid rgb(190, 190, 190);
            height: 0.5em;
            width: 0.5em;
            top:-0.05em;
            left: -0.55em;
        }
        .circle:hover{
            border: 0.25em solid rgba(190, 190, 190, 0);
        }
        .cont-date{
            padding-left: 1em;
            margin-left: 1em;
        }

    }

    `]
})

export class DateComponent{
    @Input() date:{name:string, data:string};
}