import ButtonsRow from './ButtonsRow';
import Button from './Button';

export default class Keyboard {
    constructor() {
        this.colors = {
            DarkShadow: "#A3B1C6",
            LightRed: "#ef958c",
            Black: "#000"
        };

        this.rows = [ 
            new ButtonsRow({
                buttons:[
                    new Button({title: "AC", color: this.colors.DarkShadow}),
                    new Button({title: "+/-", color: this.colors.DarkShadow}),
                    new Button({title: "%", color: this.colors.DarkShadow}),
                    new Button({title: "/", color: this.colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "7"}),
                    new Button({title: "8"}),
                    new Button({title: "9"}),
                    new Button({title: "x", color: this.colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "4"}),
                    new Button({title: "5"}),
                    new Button({title: "6"}),
                    new Button({title: "-", color: this.colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "1"}),
                    new Button({title: "2"}),
                    new Button({title: "3"}),
                    new Button({title: "+", color: this.colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "0", size: "160,70"}),
                    new Button({title: "."}),
                    new Button({title: "=", color: this.colors.LightRed})
                ]
            }),
        ];

        this.spacing = 20;
    }

    get rowsCount() {
        return this.rows.length;
    }
}