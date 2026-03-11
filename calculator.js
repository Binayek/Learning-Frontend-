let display=document.getElementById("display");
let operand1=0;
let operand2=0;
let operator=null;
function appendtodisplay(value){
    display.value+=value;
}

function calculate(){
    let result;
    switch(operator){
        case '+':
            result=operand1+operand2;
            break;
        case '-':
            result=operand1-operand2;
            break;
        case '*':
            result=operand1*operand2;
            break;
        case '/':
            result=operand1/operand2;
            break;
        default:
            result="Error";
    }
    display.value = result;
    operand1=result;
    operand2=0;
    operator=null;
}