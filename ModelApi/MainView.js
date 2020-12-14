import Keyboard from './Models/Keyboard';

export default class MainView {
    constructor() {
        this.resetAll();
        this.Keyboard = new Keyboard();
    }

    onKeyPressed(args) {
        let value = args.data.title;
        switch(value) {
            case 'AC' :
                this.resetAll();
                break;
            case '+/-' : 
                this.FirstOutput = this.FirstOutput.startsWith('-')
                                ? this.FirstOutput.replace('-','')
                                : `-${this.FirstOutput}`;
                break; 
            case '%' : 
            case 'x' :
            case '/' :
            case '+' :
            case '-' :
                this.onOperationButtonPressed(value);
                break; 
            case '=' :
                if(!this.Operation || this.IsEmptyFirstOutput) return;
                this.calculate();
                break; 
            case '0':
                if(!this.IsEmptyFirstOutput) {
                    this.FirstOutput = `${this.FirstOutput}${value}`;
                }
                break;
                case '.':
                if(!this.FirstOutput.includes('.')) {
                    this.FirstOutput = `${this.FirstOutput}${value}`;
                }
                break;
            default :
                if(this.IsMaxLength) return;
                this.FirstOutput = `${this.IsEmptyFirstOutput ? '' : this.FirstOutput}${value}`;
        }        
    }

    get IsEmptyFirstOutput() {
        return this.FirstOutput == "0";
    }

    get IsEmptySecondOutput() {
        return this.SecondOutput.length == 0;
    }

    get IsMaxLength() {
        return this.FirstOutput.length >= 8
    }

    resetAll() {
        this.resetFirstOutput();
        this.Operation = "";
        this.SecondOutput = "";
    }

    resetFirstOutput() {
        this.FirstOutput = "0";
    }

    onOperationButtonPressed(operation) {
        this.Operation = operation;
        if(this.IsEmptySecondOutput) {
            this.SecondOutput = `${this.FirstOutput}`;
            this.resetFirstOutput();
        }
    }

    calculate() {
        let result = 0;
        let firstValue = this.SecondOutput.includes('.') ? Number.parseFloat(this.SecondOutput) : Number.parseInt(this.SecondOutput);
        let secondValue = this.FirstOutput.includes('.') ? Number.parseFloat(this.FirstOutput) : Number.parseInt(this.FirstOutput);
        
        switch(this.Operation) {
            case '%' : 
                result = (firstValue / 100) * secondValue;
                break; 
            case '/' :
                result = firstValue / secondValue;
                break; 
            case 'x' : 
                result = firstValue * secondValue;
                break; 
            case '+' :
                result = firstValue + secondValue;
                break; 
            case '-' :
                result = firstValue - secondValue;
                break;
        }

        this.resetAll();
        this.FirstOutput = this.formatResult(`${result}`);
    }
    
    formatResult(result) {
        let formatted = '';
        for(let i=0; i < result.length; i++) {
            formatted += i % 8 == 7 ? `${result[i]} ` : result[i];
        }

        return formatted;
    }
}