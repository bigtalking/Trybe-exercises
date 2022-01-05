// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', nada)
INPUT_CHECKBOX.addEventListener('click', nada)

function nada(element){
    element.preventDefault()
    console.log(element)
}

INPUT_TEXT.addEventListener('keydown', aNada)

function aNada(element){
    key = element.key
    if(key == 'a') {
    }else{
        element.preventDefault()
    }
}
