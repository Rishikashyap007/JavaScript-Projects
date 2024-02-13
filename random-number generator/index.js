let randomnumber = Math.floor(Math.random()*100 + 1);
const userinput= document.querySelector(`#guessField`);
const submit = document.querySelector(`#subt`);
const guessslot = document.querySelector(`.guesses`);
const remaining =document.querySelector(`.lastResult`)
const loworhi = document.querySelector(`.lowOrHi`)
const startover = document.querySelector(`.resultParas`)
const start = document.querySelector('.startagain');
const p =document.createElement(`p`);

 let prevnum = [];
 let numberofguess = 1;

 let playgame= true;

 if (playgame) {
    submit.addEventListener('click' ,function (e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    })
 }
 function validateGuess(guess){
    if (isNaN(guess)){
        alert(`Please enter a valid number`);
    }
    // else if(guess=''){
    //     alert(`Please enter a valid number`)
    // }
    else if(guess < 1){
        alert(`Please enter a valid number`)
    }
    else if(guess>100){
        alert(`Please enter a valid number`)
    }
    else{
        prevnum.push(guess);
        if(numberofguess === 11){
            DisplayGuess(guess);
            DisplayMessage(`Game- Over :}  
            ya tha Number :- ${randomnumber}`)
            endgame();
        }
        else{
            DisplayGuess(guess);
            checkGuess(guess);
        }
    }
 }

 function checkGuess(guess){
    if (guess==randomnumber){
        DisplayMessage(`Whoa!.... You guess it Right`)
        endgame();
    }
    else if(guess<randomnumber){
        DisplayMessage(`Your value is Too Low :) `)
    }
    else if(guess > randomnumber){
        DisplayMessage(`Your guess is Sooo High :))`)
    }
 }
 function DisplayGuess(guess){
    userinput.value = '';
   guessslot.innerHTML += `${guess} , `;
    numberofguess++;
    remaining.innerHTML = `${11 -numberofguess}`
 }
 function DisplayMessage(message){
    loworhi.innerHTML =  `<h2> ${message}</h2> `
 }
 function endgame(){
     userinput.value = '';
     userinput.setAttribute('disabled', '');
     p.classList.add('button');
     p.innerHTML = ` <h2 id="Newgame"> Start Again </h2> `
    //  startover.remove(`resultparas`)
    //  submit.remove('subt')
    //  start.appendChild(p);
    startover.appendChild(p);
     playgame=false;
     newgame();
 }
 function newgame(){
     const newgamebtn = document.querySelector("#Newgame")
     newgamebtn.addEventListener("click",function(e){
        randomnumber = parseInt(Math.random*100 + 1 );
        prevnum=[];
        numGuess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        DisplayMessage('');
        // startover.append(`.resultparas`)
        // submit.append('#subt');
        // start.remove(p);
        startover.removeChild(p);
        userinput.removeAttribute("disabled");
        playgame=true;
     });
 }