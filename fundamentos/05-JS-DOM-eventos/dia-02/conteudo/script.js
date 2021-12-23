let aqui = document.getElementById('elementoOndeVoceEsta')

aqui.parentElement.style.color = 'black'

aqui.firstElementChild.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quaerat culpa cupiditate et quasi ad quod labore, magnam aliquid impedit voluptatibus blanditiis repellendus iste consequuntur, tempore maxime. Quos, nobis dolorem.'

let pai = document.getElementById('pai')
pai.firstElementChild

console.log(aqui.nextSibling)

irmao = document.createElement('section')
pai.appendChild(irmao)

filho = document.createElement('section')
filho.id = 'filho'
aqui.appendChild(filho)

filhoDofi = document.createElement('section')
filhoDofi.id = 'filhoDoFilhoDoFilho'
document.getElementById('primeiroFilhoDoFilho').appendChild(filhoDofi)

fi = document.getElementById('filhoDoFilhoDoFilho')

let avo = document.getElementById('paiDoPai')
//for (let x=0; x<)

//for(x=0;x<10;x+=1){console.log(a[x] if(a[x].id.includes('terceiro')){a[x].parentElement.removeChild(a[x])})}
a = document.querySelectorAll('#paiDoPai *')
for(x=0;x<10;x+=1){
    let element = a[x]
    if(element.id.includes('pai') || element.id.includes('elementoOndeVoceEsta') || element.id.includes('primeiroFilhoDoFilho')){
    }
    else{
        element.parentElement.removeChild(element)
    }
}