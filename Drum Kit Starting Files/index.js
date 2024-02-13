//  document.querySelector('button').addEventListener('click' , function(){
//     alert("I clicked")
//  })

const sets =  document.querySelectorAll('.drum')

sets.forEach((set) => set.addEventListener('click' , function(){
    makesound(this.innerHTML);
}))

document.addEventListener('keypress', function(e){
    makesound(e.key)
})

const makesound = (key)=>{
    if(key === 'w'){
        let audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    }
     else if(key === 'a'){
        let audio = new Audio('sounds/tom-2.mp3')
        audio.play();
    }
     else if(key === 's'){
        let audio = new Audio('sounds/tom-3.mp3')
        audio.play();
    }
    else if(key === 'j'){
        let audio = new Audio('sounds/tom-4.mp3')
        audio.play();
    }
    else if(key === 'k'){
        let audio = new Audio('sounds/crash.mp3')
        audio.play();
    }
    else if(key === 'l'){
        let audio = new Audio('sounds/kick-bass.mp3')
        audio.play();   
    }
    else if(key === 'd'){
        let audio = new Audio('sounds/snare.mp3')
        audio.play();
    }
}