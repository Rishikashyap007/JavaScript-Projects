const buttons = document.querySelectorAll('.btn')
const imgCont = document.querySelectorAll('.img-container img')

buttons.forEach((button) => {
  button.addEventListener('click' , function(e){
     e.preventDefault();
     console.log('Clicked')

     let filter = e.target.id;
     console.log(filter)

     imgCont.forEach((items) =>{
        if(filter === 'all'){
            items.style.display = 'block'
        }
        else{
            if(items.classList.contains(filter)){
                console.log(filter + 'if2')
              items.style.display='block';
            }
            else{
                items.style.display='none';
            }
        }
     })
  })
})