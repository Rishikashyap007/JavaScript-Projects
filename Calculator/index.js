const Buttons = document.querySelectorAll('.Buttons')
const Operators = document.querySelectorAll('.operators')
let input = document.getElementById('para');
let currval = '';
Buttons.forEach((Button) => Button.addEventListener
('click',function(e){
   
    
    if (e.target.id === 'E'){
        try {
            console.log(" if cond");
            console.log(currval);
            input.innerText = eval(currval);
        } catch (error) {
            input.innerText = 'error';
        }
    }
    else{
        currval += e.target.id;
        input.innerText = currval
        console.log("else 1");
    }
}))
Operators.forEach((Operator) => Operator.addEventListener('click' , function(e){
    console.log("else 2");
    currval += e.target.id;
    input.innerText = currval
    if(e.target.id=== 'C'){
        currval = '';
        input.innerText='';  
    }
}))