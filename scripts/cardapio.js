import { Pizza } from "./pizza.js";

const pedir = document.querySelectorAll('.pedir')
const h2Title = document.querySelector('.h2Title')
const divPedidos = document.querySelector('.divPedidos')

let config={}


pedir[0].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza1.png',
        tamanho:['g','m','p'],
        preco:[25,23,20],
        pizza: 'Mussarela',
        desc: 'Molho de tomate, camada dupla de mussarela e orégano.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[1].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza2.png',
        tamanho:['g','m','p'],
        preco:[26,24,21],
        pizza: 'Calabresa',
        desc: 'Calabresa fatiada, mussarela, molho de tomate cebola e orégano.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[2].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza3.png',
        tamanho:['g','m','p'],
        preco:[28,26,23],
        pizza: '4 Queijos',
        desc: 'Molho de tomate, camadas de mussarela, provolone, parmessão, gorgonzola e orégano.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[3].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza4.png',
        tamanho:['g','m','p'],
        preco:[29,27,24],
        pizza: 'Brasileira',
        desc: 'Molho de tomate, mussarela, calabresa picada, palmito, champignon, azeitonas e orégano.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[4].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza5.png',
        tamanho:['g','m','p'],
        preco:[31,29,26],
        pizza: 'Portuguesa',
        desc: 'Molho de tomate, mussarela, presunto, ovos, cebolas, pimentão, azeitona e orégano.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[5].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza6.png',
        tamanho:['g','m','p'],
        preco:[35,33,30],
        pizza: 'Moda da Casa',
        desc: 'Molho de tomate, mussarela, carne de sol, tomates em cubos, coentro, cebola, azeitona, catupiry e orégano.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[6].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza7.png',
        tamanho:['g','m','p'],
        preco:[37,35,32],
        pizza: 'Banana com Canela',
        desc: 'Mussarela, banana, canela e açúcar.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
pedir[7].addEventListener('click',()=>{
    config={
        img: '../imgs/pizza8.png',
        tamanho:['g','m','p'],
        preco:[40,37,34],
        pizza: 'Chocolate com Morango',
        desc: 'Creme de leite, lascas de chocolate e morangos.'
    }
    Pizza.mostrar(config,h2Title,divPedidos)
})
