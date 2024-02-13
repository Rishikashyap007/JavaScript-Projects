const display = document.querySelector('#Display')
let currVal = '';
function appendToDisplay(input){
       currVal += input;
       display.value = currVal;
       console.log('i clicked')
}
function calculateResult(){
    display.value = eval(currVal);
    console.log("calc called");
}
function clearResult(){
    currVal = '';
    display.value = '';
    console.log("clear called");
}

// let resultField = document.getElementById('Display');
// let currentInput = '';

// function appendToDisplay(value) {
//     currentInput += value;
//     resultField.value = currentInput;
// }

// function calculateResult() {
//     try {
//         currentInput = eval(currentInput).toString();
//         resultField.value = currentInput;
//     } catch (error) {
//         resultField.value = 'Error';
//     }
// }

// function clearResult() {
//     currentInput = '';
//     resultField.value = '';
// }
