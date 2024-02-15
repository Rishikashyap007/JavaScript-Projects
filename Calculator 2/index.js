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
