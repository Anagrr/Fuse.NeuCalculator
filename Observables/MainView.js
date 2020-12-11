var Observable = require('FuseJS/Observable');
var Keyboard = require('Keyboard').Keyboard;

var FirstOutput = Observable();
var SecondOutput = Observable();
var Operation = Observable();

resetAll();

function onKeyPressed(args) {
    var value = args.data.title;
    switch(value) {
        case 'AC' :
            resetAll();
            break;
        case '+/-' :
            FirstOutput.value = FirstOutput.value.startsWith('-')
                            ? FirstOutput.value.replace('-','')
                            : `-${FirstOutput.value}`;
            break;
        case '%' :
        case '/' :
        case 'x' :
        case '+' :
        case '-' :
            onOperationButtonPressed(value);
            break;
        case '=' :
            if(!Operation.value || IsEmptyFirstOutput()) return;
            calculate();
            break;
        case '0':
            if(!IsEmptyFirstOutput()) {
                FirstOutput.value = `${FirstOutput.value}${value}`;
            }
            break;
        case '.':
            if(!FirstOutput.value.includes('.')) {
                FirstOutput.value = `${FirstOutput.value}${value}`;
            }
            break;
        default :
            if(IsMaxLength()) return;
            FirstOutput.value = `${IsEmptyFirstOutput() ? '' : FirstOutput.value}${value}`;
    }
}

function IsEmptyFirstOutput() {
    return FirstOutput.value == "0";
}

function IsEmptySecondOutput() {
    return SecondOutput.value.length == 0;
}

function IsMaxLength() {
    return FirstOutput.value.length >= 8
}

function resetAll() {
    resetFirstOutput();
    Operation.value = "";
    SecondOutput.value = "";
};

function resetFirstOutput() {
    FirstOutput.value = "0";
};

function onOperationButtonPressed(operation) {
    Operation.value = operation;
    if(IsEmptySecondOutput()) {
        SecondOutput.value = `${FirstOutput.value}`;
        resetFirstOutput();
    }
};

function calculate() {
    var result = 0;
    var firstValue = SecondOutput.value.includes('.') ? Number.parseFloat(SecondOutput.value) : Number.parseInt(SecondOutput.value);
    var secondValue = FirstOutput.value.includes('.') ? Number.parseFloat(FirstOutput.value) : Number.parseInt(FirstOutput.value);

    switch(Operation.value) {
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

    resetAll();
    FirstOutput.value = formatResult(`${result}`);
};

function formatResult(result) {
    var formatted = '';
    for(var i=0; i < result.length; i++) {
        formatted += i % 8 == 7 ? `${result[i]} ` : result[i];
    }

    return formatted;
};

module.exports = {
    FirstOutput,
    SecondOutput,
    Keyboard,
    Operation,
    onKeyPressed
};