let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(`.choice`);

choices.forEach((choice)=> choice.addEventListener('click' , function(e){
    const userChoice = choice.getAttribute('id');
    console.log(userChoice);
    playgame(userChoice);
}))

const genCompChoice = function(){
    const options = ["rock", 'paper' , `scissors`]
    let index = Math.floor(Math.random()*3)
    console.log("computer choice is " , options[index]);
    return options[index];
   
}
const result = document.querySelector(`#para`)
const playerscore = document.querySelector(`#user-choice`)
const compscore = document.querySelector(`#Comp-choice`)


const playgame = (userChoice)=>{
    const compChoice = genCompChoice();
    if(compChoice == userChoice){
        console.log("Draw")
        result.innerHTML = `<h2> Draw </h2>`;
        result.style.backgroundColor = '#414141';
    }
    else if (compChoice == 'rock' && userChoice == 'paper'){
        console.log("YOU WIn")
        userScore ++ ;
        console.log(userScore)
        result.innerHTML = `<h2> You Win ! </h2>`
        result.style.backgroundColor = 'green';
        playerscore.innerText = userScore 
    }
    else if (compChoice == 'paper' && userChoice == 'scissors'){
        console.log("YOU WIn")
        userScore ++ ;
        console.log(userScore)
        result.innerHTML = `<h2> You Win ! </h2>`
        result.style.backgroundColor = 'green';
        playerscore.innerText = userScore 
    }
    else if (compChoice == 'scissors' && userChoice == 'rock'){
        console.log("YOU WIn")
        userScore ++ ;
        console.log(userScore)
        result.innerHTML = `<h2> You Win ! </h2>`
        result.style.backgroundColor = 'green';
        playerscore.innerText = userScore 
    }
    else{
        console.log("computer Wins");
        compScore++;
        console.log(compScore)
        result.innerHTML = `<h2> Comp wins </h2>`
        result.style.backgroundColor = 'red';
        compscore.innerText = compScore 
    }
}

// const resetBtn = document.querySelector('.resetbtn')
// resetBtn.addEventListener("click" , function(){
//     playerscore.innerText = 0
//     compscore.innerText = 0
//     result.innerHTML = `<h2> Play Your Move </h2>`
// })