class Pizza{
    static destino = null
    static pizzaConteiner = null
    static config = null
    static divPedidos = null
    static h2Title = null
    static precoTot = 0
    static pedidos = []
    static posiArrayTam=0
    static h2Quant = null
    static quant=1

    static mostrar=(config,h2Title,divPedidos)=>{
        this.destino = document.body
        this.config = config
        this.h2Title = h2Title
        this.divPedidos = divPedidos

        this.pizzaConteiner=document.createElement('div')
        const stylePizzaConteiner=
            "position: absolute;" +
            "width: 100vw;" +
            "height: 100vh;" +
            "display: flex;" +
            "align-items: center;" +
            "justify-content: center;" +
            "background-color: #000000ab;" +
            "z-index: 9;" 
        this.pizzaConteiner.setAttribute('class','pizzaConteiner')
        this.pizzaConteiner.setAttribute('style',stylePizzaConteiner)
        this.destino.prepend(this.pizzaConteiner)

        const pizza=document.createElement('div')
        const stylePizza=
            "position: relative;"+
            "background-color: #ffffff;" +
            "display: flex;" +
            "flex-wrap: wrap;" +
            "flex-direction: column;" +
            "align-items: center;" +
            "gap: 20px;" +
            "padding: 20px 0px;" +
            "border-radius: 20px;" +
            "box-shadow: 0px 0px 13px #11388597;" 
        pizza.setAttribute('class','pizza')
        pizza.setAttribute('style',stylePizza)
        this.pizzaConteiner.appendChild(pizza)

        const imgPizza=document.createElement('img')
        const styleImgPizza="width: 50%;"
        imgPizza.setAttribute('src',config.img)
        imgPizza.setAttribute('style',styleImgPizza)
        pizza.appendChild(imgPizza)

        const h2Titulo=document.createElement('h2')
        h2Titulo.innerHTML = config.pizza
        pizza.appendChild(h2Titulo)

        const pDsc=document.createElement('p')
        pDsc.innerHTML = config.desc
        pizza.appendChild(pDsc)

        const divTam=document.createElement('div')
        divTam.setAttribute('class','btnTam')
        pizza.appendChild(divTam)

        const allBtn=
            "background-color: var(--cor5);" +
            "color: var(--cor1);" +
            "font-weight: 700;" +
            "font-size: 1rem;" +
            "padding: 3px 10px;" +
            "margin: 0px 10px;" +
            "box-shadow: 0px 0px 6px #3636364c;" +
            "cursor: pointer;" +
            "transition: all 0.2s;" 
        const btnGrande=document.createElement('button')
        btnGrande.setAttribute('style',allBtn+"border-radius:10px")
        btnGrande.style.backgroundColor='var(--cor1)'
        btnGrande.style.color='var(--cor5)'
        btnGrande.setAttribute('class','btnTamanhos')
        btnGrande.addEventListener('click',this.selecionarTamanho)
        btnGrande.innerHTML='Grande'
        divTam.appendChild(btnGrande)

        const btnMedio=document.createElement('button')
        btnMedio.setAttribute('style',allBtn+"border-radius:10px")
        btnMedio.setAttribute('class','btnTamanhos')
        btnMedio.addEventListener('click',this.selecionarTamanho)
        btnMedio.innerHTML='Médio'
        divTam.appendChild(btnMedio)

        const btnPequeno=document.createElement('button')
        btnPequeno.setAttribute('style',allBtn+"border-radius:10px")
        btnPequeno.setAttribute('class','btnTamanhos')
        btnPequeno.addEventListener('click',this.selecionarTamanho)
        btnPequeno.innerHTML='Pequeno'
        divTam.appendChild(btnPequeno)

        this.h2Quant=document.createElement('h2')
        this.h2Quant.innerHTML = `${this.quant} / ${this.config.preco[this.posiArrayTam].toLocaleString('pt-BR',{style:"currency", currency:'BRL'})}`
        pizza.appendChild(this.h2Quant)

        const divQuant=document.createElement('div')
        pizza.appendChild(divQuant)

        const styleBtnAddCar=
            "background-color: var(--cor2);" +
            "color: var(--cor5);" +
            "border-radius: 10px;" 
        const btnAddCar=document.createElement('button')
        btnAddCar.setAttribute('style',styleBtnAddCar)
        btnAddCar.innerHTML = 'Adicionar ao carrinho'
        btnAddCar.addEventListener('click',()=>{
            this.addCar()
        })
        divQuant.appendChild(btnAddCar)

        const btnMenos=document.createElement('button')
        btnMenos.innerHTML = '-'
        btnMenos.setAttribute('style',allBtn)
        btnMenos.addEventListener('click',()=>{
            if(this.quant > 1){
                this.quant--
            }
            this.atualizarQuantValor()
        })
        divQuant.appendChild(btnMenos)
        
        const btnMais=document.createElement('button')
        btnMais.setAttribute('style',allBtn)
        btnMais.innerHTML = '+'
        btnMais.addEventListener('click',()=>{
            this.quant++
            this.atualizarQuantValor()
        })
        divQuant.appendChild(btnMais)

        const styleClose=
            "font-size: 2.5rem;" +
            "cursor: pointer;" +
            "position: absolute;" +
            "top: 15px;" +
            "right: 15px;" 
        const close = document.createElement('span')
        close.setAttribute('class','material-symbols-outlined')
        close.setAttribute('style',styleClose)
        close.innerText = 'close'
        close.addEventListener('click',()=>{
            this.ocultar(this.pizzaConteiner)
        })
        pizza.appendChild(close)
    }
    static ocultar=(div)=>{
        div.remove()
        this.quant = 1
    }
    static selecionarTamanho=(el)=>{
        const btnTamanhos=document.querySelectorAll('.btnTamanhos')
        btnTamanhos.forEach((e,ind)=>{
            e.style.backgroundColor='var(--cor5)'
            e.style.color='var(--cor1)'

            if(el.target == e){
                this.posiArrayTam = ind
                this.atualizarQuantValor()
            }
        })
        el.target.style.backgroundColor='var(--cor1)'
        el.target.style.color='var(--cor5)'
    }
    static atualizarQuantValor=()=>{
        this.h2Quant.innerHTML = `${this.quant} / ${(this.quant * this.config.preco[this.posiArrayTam]).toLocaleString('pt-BR',{style:"currency", currency:'BRL'})}`
    }
    static addCar=()=>{
        this.pedidos.push(
            {
                quantidade: this.quant,
                precoTot: (this.quant * this.config.preco[this.posiArrayTam]),
                pizzaEsc: this.config.pizza
            }
        )
        this.precoTot = 0
        this.divPedidos.innerHTML = ""
        this.renderPedido()
        this.ocultar(this.pizzaConteiner)
    }
    static renderPedido=()=>{
        if(this.pedidos.length<=0){
            this.h2Title.innerHTML = "Nenhum Pedido realizado"
        } else if (this.pedidos.length >= 1){
            this.h2Title.innerHTML = "Seus Pedidos"
        }
        this.h2Title.setAttribute('style','text-align: center;')
        this.pedidos.map((piz,ind)=>{
            this.precoTot+=piz.precoTot
            const styleDivCadaPedido=
                "display: flex;" +
                "background-color: var(--cor5);" +
                "padding: 0px 10px;" +
                "border-radius: 8px;" 
            const divCadaPedido=document.createElement('div')
            divCadaPedido.setAttribute('class','divCadaPizza')
            divCadaPedido.setAttribute('key',ind)
            divCadaPedido.setAttribute('id',`${ind}`)
            divCadaPedido.setAttribute('style',styleDivCadaPedido)
    
            const styleH4 = "box-shadow: none;"
            const h4=document.createElement('h4')
            h4.setAttribute('style',styleH4)
            h4.innerHTML = `${piz.pizzaEsc} ${piz.quantidade} / ${piz.precoTot.toLocaleString('pt-BR',{style:"currency", currency:'BRL'})}`
            divCadaPedido.appendChild(h4)
            
            const styleBtnRemover=
                "background-color: var(--cor3);" +
                "margin: 3px auto;"
            const btnRemover=document.createElement('button')
            btnRemover.setAttribute('style',styleBtnRemover)
            btnRemover.innerHTML = 'Remover'
            btnRemover.addEventListener('click',(btn)=>{
                this.pedidos.splice(btn.target.parentElement.id,1)
                this.precoTot = 0
                this.divPedidos.innerHTML = ""
                this.renderPedido()
            })
            divCadaPedido.appendChild(btnRemover)
            
            this.divPedidos.appendChild(divCadaPedido)
        })
        if(this.precoTot > 0){
            const styleH3 = 
                "color: var(--cor5);" +
                "text-decoration: underline;" +
                "text-align: center;" 
            const h3=document.createElement('h3')
            h3.setAttribute('style',styleH3)
            h3.innerHTML=`Total ${this.precoTot.toLocaleString('pt-BR',{style:"currency", currency:'BRL'})}`
            this.divPedidos.appendChild(h3)
        }
    }
}

export {Pizza}