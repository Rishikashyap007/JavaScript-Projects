const cardArray = [
    {
        name: 'Fries',
        img: 'images/fries.png'
    },
    {
        name: 'chesse Burger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'Fries',
        img: 'images/fries.png'
    },
    {
        name: 'chesse Burger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
    
]
//console.log(cardArray)

cardArray.sort(() => Math.random() - 0.5)
//console.log(result)

const gameDisplay = document.querySelectorAll('.game')
const Resetbutton = document.querySelector('.Reset')
// console.log(gameDisplay)

let chosencard = [];
let cardChosenId =[];
const gameWons= [];
 let playgame =true;
 if(playgame){
    createBoard()
 }

function createBoard(){
    for (let i=0; i<12 ;i++){
        const card = document.createElement('img')
        // console.log(card,i) 
        card.setAttribute('src','https://imgs.search.brave.com/aL4pF0d-J8tuXj4iUlU3dHcOUEsMhnP1RZz8OeRuTzE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjM4MjI4OTgwNTkt/NzI3Y2ViZWI4Njcw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/SnNZV05ySlRJd1ky/RnlaSHhsYm53d2ZI/d3dmSHg4TUE9PQ')
        card.setAttribute('id',i)
        //console.log(card);
        gameDisplay[0].appendChild(card);
        card.addEventListener('click', flipcard)
    }
}
 function flipcard(){
    const cardId = this.getAttribute('id')
    chosencard.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    // console.log(chosencard)
    this.setAttribute('src',cardArray[cardId].img)

    if(chosencard.length === 2){
        setTimeout(checkMatch , 500);
    }
 }

 function checkMatch(){
    //console.log("Still searching")
    const cards = document.querySelectorAll('img') 
    // console.log(cards)
    if(cardChosenId[0] == cardChosenId[1]){
        cards[cardChosenId[0]].setAttribute('src','https://imgs.search.brave.com/aL4pF0d-J8tuXj4iUlU3dHcOUEsMhnP1RZz8OeRuTzE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjM4MjI4OTgwNTkt/NzI3Y2ViZWI4Njcw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/SnNZV05ySlRJd1ky/RnlaSHhsYm53d2ZI/d3dmSHg4TUE9PQ')
        cards[cardChosenId[1]].setAttribute('src','https://imgs.search.brave.com/aL4pF0d-J8tuXj4iUlU3dHcOUEsMhnP1RZz8OeRuTzE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjM4MjI4OTgwNTkt/NzI3Y2ViZWI4Njcw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/SnNZV05ySlRJd1ky/RnlaSHhsYm53d2ZI/d3dmSHg4TUE9PQ')
        alert(" Don't be OverSmat ! You clicked the same image")
    }
    else if(chosencard[0] === chosencard[1]){
        cards[cardChosenId[0]].setAttribute('src','images/white.png')
        cards[cardChosenId[1]].setAttribute('src','images/white.png')
        cards[cardChosenId[0]].removeEventListener('click',flipcard)
        cards[cardChosenId[1]].removeEventListener('click',flipcard)
        gameWons.push(chosencard)
    }
    else{
        cards[cardChosenId[0]].setAttribute('src','https://imgs.search.brave.com/aL4pF0d-J8tuXj4iUlU3dHcOUEsMhnP1RZz8OeRuTzE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjM4MjI4OTgwNTkt/NzI3Y2ViZWI4Njcw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/SnNZV05ySlRJd1ky/RnlaSHhsYm53d2ZI/d3dmSHg4TUE9PQ')
        cards[cardChosenId[1]].setAttribute('src','https://imgs.search.brave.com/aL4pF0d-J8tuXj4iUlU3dHcOUEsMhnP1RZz8OeRuTzE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjM4MjI4OTgwNTkt/NzI3Y2ViZWI4Njcw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/SnNZV05ySlRJd1ky/RnlaSHhsYm53d2ZI/d3dmSHg4TUE9PQ')
    }
    chosencard=[]
    cardChosenId=[]
    const result = document.querySelector('#result')
    if(gameWons.length === cardArray.length/2){
        result.innerText = "Congratulations! you find all";
     }

 }