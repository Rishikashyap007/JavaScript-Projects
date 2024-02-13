const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

// buttons.forEach(function (btn){
//     btn.addEventListener('click',function (e){
//         if (e.target.id ==='grey') {
//             body.style.backgroundColor="grey";
//         }
//         if (e.target.id ==='white') {
//             body.style.backgroundColor="white";
//         }
//         if (e.target.id ==='blue') {
//             body.style.backgroundColor="blue";
//         }
//         if (e.target.id ==='yellow') {
//             body.style.backgroundColor="yellow";
//         }
//     })
// });


buttons.forEach(function (btn){
    btn.addEventListener('click',function(e){
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor="grey";
                break;  
            case 'white':
                body.style.backgroundColor="red";
                break;  
            case 'blue':
                body.style.backgroundColor="skyblue";
                break;  
            case 'yellow':
                body.style.backgroundColor="greenyellow";
                break;  
        }
    })
});