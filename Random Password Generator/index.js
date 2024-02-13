
const passwordbox = document.querySelector('.pass-Input')
const generate = document.querySelector('.Btn')
const copyBtn = document.querySelector('.cpy-img')
const lenght = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const num = '0123456789'
const symbol = '!@#$%^&*()+-*/?><'

const allchar = uppercase+lowercase+num+symbol;

function createPassword(){
    let password = ''
    while(lenght>password.length){
        password += allchar[(Math.floor(Math.random()*allchar.length))]
    }
    passwordbox.value = password;
    console.log(password);
}
generate.addEventListener('click',createPassword);
copyBtn.addEventListener('click' , copyall)

function copyall(){
    passwordbox.select()
    document.execCommand('copy');
}
