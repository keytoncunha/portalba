import Style from './styleHeader.js';

const head = document.head
const style = document.createElement('style')
style.innerHTML = Style.estilo
head.appendChild(style)

const LinkIcons = document.createElement('link')
LinkIcons.setAttribute('rel','stylesheet')
LinkIcons.setAttribute('href','https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0')
head.appendChild(LinkIcons)

const body = document.body

const header = document.createElement('header')

const h1 = document.createElement('h1')
h1.innerText = 'Port`Alba'
header.appendChild(h1)

const spanMenu = document.createElement('span')
spanMenu.setAttribute('id','burguer')
spanMenu.setAttribute('class','material-symbols-outlined')
spanMenu.innerText = 'menu'
spanMenu.addEventListener('click',()=>{
    nav.classList.remove('menuNone')
})
header.appendChild(spanMenu)

const nav = document.createElement('nav')
nav.setAttribute('id','nav')
nav.setAttribute('class','menuNone')
nav.addEventListener('mouseleave',()=>{
    if(window.innerWidth < 768){
        nav.setAttribute('class','menuNone')
    }
})
header.appendChild(nav)

const spanClose = document.createElement('span')
spanClose.setAttribute('id','close')
spanClose.setAttribute('class','material-symbols-outlined')
spanClose.innerText = 'close'
spanClose.addEventListener('click',()=>{
    nav.setAttribute('class','menuNone')
})
nav.appendChild(spanClose)

const aHome = document.createElement('a')
aHome.setAttribute('href','/portalba')
aHome.innerText = 'Home'
nav.appendChild(aHome)

let url = window.location.href.split('pages')
url = url[0]

const aCardapio = document.createElement('a')
aCardapio.setAttribute('href',`${url}pages/cardapio.html`)
aCardapio.innerText = 'Cardápio'
nav.appendChild(aCardapio)


const aContato = document.createElement('a')
aContato.setAttribute('href',`${url}pages/contato.html`)
aContato.innerText = 'Contato'
nav.appendChild(aContato)

const aHistoria = document.createElement('a')
aHistoria.setAttribute('href',`${url}pages/sobre.html`)
aHistoria.innerText = 'Sobre'
nav.appendChild(aHistoria)

body.prepend(header)

const test =document.createElement('p')
test.innerHTML='Olá, mundo. </br>Você se livrou da maldição.'
// body.appendChild(test)