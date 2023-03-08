const input=document.querySelector('#input')
const op=document.querySelector('#operators')
const num=document.querySelector('#numbers')
const dele=document.querySelector('#delete')
const clear=document.querySelector('#clear')
const equal=document.querySelector('#equalsto')

// Operators
const addition=(e)=>{
    input.value+='+'
}

const subtract=(e)=>{
    input.value+='-'
}

const multi=(e)=>{
    input.value+='*'
}

const divi=(e)=>{
    input.value+='/'
}

// Delete

const del=(e)=>{
    input.value=input.value.toString().slice(0,-1)
}

// Clear

const cls=(e)=>{
    input.value=''
}

// Equalsto

const eql=(e)=>{
    input.value=eval(input.value)
}