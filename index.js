let firstVal = "";
let secondVal = "";
let operationType = undefined;

let clear = document.querySelector('.clear');
let numBtn = document.querySelectorAll('.numBtn');
let inputField = document.querySelector('.inputField');
let showResult = document.querySelector('.showResult');
clear.addEventListener('click', () => resetCalculator());
showResult.addEventListener('click', () => returnAnswer());

const resetValues = () => {
    firstVal = "";
    secondVal = "";
    operationType = undefined;
}

const resetCalculator = () => {
    resetValues();
    inputField.value =  "";
}

const payloadOperation = (type, sign) => {
    operationType = type;
    inputField.value += sign;
}

numBtn.forEach((num) => {
    num.addEventListener('click', () => {
        if(!firstVal && !secondVal && !operationType){
            inputField.value = "";
        }
        if(operationType){
            secondVal += num.innerText;
        }
        else{
            firstVal += num.innerText;
        }
        inputField.value += num.innerText;
    })
})

const returnAnswer = () => {
    firstVal = parseInt(firstVal);
    secondVal = parseInt(secondVal);
    switch(operationType){
        case 'add':
            inputField.value = firstVal + secondVal;
            break;
        case 'sub':
            inputField.value = firstVal - secondVal;
            break;
        case 'mul':
            inputField.value = firstVal * secondVal;
            break;
        case 'div':
            inputField.value = firstVal / secondVal;
            break;
        case 'mod':
            inputField.value = firstVal % secondVal;
            break;
    }
    resetValues();
}