
import throttle from 'lodash.throttle'
const SAVED_KEY  = localStorage.getItem("feedback-form-state")
const refs = {
    forms: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}

onMessageTextareaInput()
onMessageEmailInput()
refs.forms.addEventListener('submit',onformSubmit)
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500))
refs.input.addEventListener('input', throttle(onEmailInput, 500))


function onformSubmit(event) { 
    event.preventDefault()   
    event.target.reset()
    localStorage.removeItem(SAVED_KEY)
}

function onTextareaInput(event) {
    value = event.target.value
    localStorage.setItem(SAVED_KEY,value)   
}
function onEmailInput(event) {
    value = event.target.value
    localStorage.setItem(SAVED_KEY,value)   
}


function onMessageTextareaInput(event) {
    savedMessage = localStorage.getItem(SAVED_KEY)
    if (savedMessage) {
    console.log(savedMessage) 
    refs.textarea.value =  savedMessage      
}
}

function onMessageEmailInput(event) {
    savedMessage = localStorage.getItem(SAVED_KEY)
    if (savedMessage) {
    console.log(savedMessage) 
    refs.textarea.value =  savedMessage      
}
}