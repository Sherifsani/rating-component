"use strict"

const submit = document.querySelector('button')
const span = document.querySelector('span')
const card = document.querySelector('.main-card')
const thank = document.querySelector('.thank')
const eache = document.querySelectorAll('.each')


function clicker() {
    Unclick(this)
    this.classList.add('orange')
    span.textContent = this.textContent   
}

function Unclick(b){
    for(let i = 0; i <eache.length; i++){
        if(eache[i] != b){
            eache[i].classList.remove('orange')
        }
    }
}

for (let i = 0; i < eache.length; i++) {
   eache[i].addEventListener('click', clicker)
    
}

submit.addEventListener('click', ()=>{
    thank.classList.remove('hide')
    card.classList.add('hide')
})

