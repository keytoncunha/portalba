const body = document.body

const styleFooter=
    "display: flex;" +
    "flex-direction: column;" +
    "flex-wrap: wrap;" +
    "align-items: center;" +
    "gap: 30px;" +
    "background-color: var(--cor1);" +
    "color: var(--cor5);" +
    "text-align: center;" +
    "padding: 30px 20px;" 
const footer=document.createElement('footer')
footer.setAttribute('style',styleFooter)

const div=document.createElement('div')
const h2=document.createElement('h2')
h2.innerHTML='Sobre o Desenvolvedor'
div.appendChild(h2)

const styleA=
    "color: var(--cor4);" +
    "font-size: 1.1rem;" +
    "text-decoration: none;" +
    "padding: 0px 5px;" +
    "border-radius: 5px;" +
    "transition: .3s;" 
const stylePSobre=
    "max-width: 500px;" +
    "text-indent: 20px;"
const pSobre=document.createElement('p')
pSobre.setAttribute('style',stylePSobre)
pSobre.innerHTML = `Site criado por <a style="${styleA}" href="https://keyton.dev.br" target="_blank">Keyton Dev.</a> Profissional na área de Front-end, responsável por criar sites estáticos,  blogs, loja virtual, landing pages etc.`
div.appendChild(pSobre)

const pCopy=document.createElement('p')
pCopy.innerHTML='&copy; Keyton Dev. 2023'

footer.appendChild(div)
footer.appendChild(pCopy)
body.appendChild(footer)