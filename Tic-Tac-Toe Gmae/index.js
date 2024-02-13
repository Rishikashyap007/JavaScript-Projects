let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.rstbtn')
let newbtn = document.querySelector('.newbtn')
let msgCont = document.querySelector('.msg-container')
let resetgame = document.querySelector('.resetGame')
const msg  = document.querySelector('.msg')
let turn0 = true;
let count = 0;

const winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click' , function(){
        if(turn0){
            box.innerText = 'O'
            turn0= false;
        }
        else{
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true
        count++;
        let isWinner = checkwinner()
        if(isWinner){
            document.body.style.overflowY = 'auto'
        }

        if(count===9 && !isWinner){
            gameDraw();
         }
    })
})
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgCont.classList.remove("hide");
    disableboxes();
  };
const resetfun = () =>{
    turn0=true;
    enableboxes();
    msgCont.classList.add('hide')

}
resetbtn.addEventListener('click' , resetfun);
newbtn.addEventListener('click' , resetfun);

const disableboxes = () =>{
    for (let box of boxes) {
     box.disabled = true;
    }
}
const enableboxes = () =>{
    for (let box of boxes) {
     box.disabled = false;
     box.innerText= '';
    }
}
const showWinner = (winner) =>{
    
    msg.innerText = `Congratulations Winner is Player: ${winner}`
    msgCont.classList.remove('hide');
    disableboxes()
}
 const checkwinner=() => {
     for (let pattren of winPattrens) {
        let pos1val = boxes[pattren[0]].innerText
        let pos2val = boxes[pattren[1]].innerText
        let pos3val = boxes[pattren[2]].innerText
        // console.log(pos1val , pos2val , pos3val )
        if(pos1val != "" && pos2val != '' && pos3val!= ``){
           if (pos1val===pos2val && pos2val===pos3val){
               console.log("Winner")
               showWinner(pos1val)
           }
        }
     }
 }