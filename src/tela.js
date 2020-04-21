const util = time
const msg = {
    sucesso:{
        texto:'Combinação Correta',
        class: 'alert-sucess'
    },
    erro:{
        texto:'Combinação Incorreta',
        class: 'alert-danger'
    }
}

class tela{
    static obter(item){
        return `<div class="col-md-3">
        <div class="card" style="width: 50%;" onclick="window.ver('${item.id}','${item.nome}')">
            <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
       
        </div>
        <br>
    </div>`
    }
    static alterHtml(item){
        const conteudo = document.querySelector('#cont')
        conteudo.innerHTML = item


    }
    static concaS(itens){

        return itens.map(tela.obter).join('')

    }

    static atuI(itens){

        const cod = tela.concaS(itens)
        tela.alterHtml(cod)

    }
    static emba(on){
        const bt = document.querySelector('#jogar')
        bt.addEventListener('click', on)
    }
    static confi(click){
        window.ver = click
    }

    static exibirHerois(nomeD, img){
        const ele = document.getElementsByName(nomeD)

        ele.forEach((item)=>{
            item.src = img
        })


    }
    static async exiM(sucess = true){
        const ele = document.querySelector('#msg')
        if(sucess){
            ele.classList.remove(msg.erro.class)
            ele.classList.add(msg.sucesso.class)
            ele.innerText = msg.sucesso.texto
        }
        else{
            ele.classList.remove(msg.sucesso.class)
            ele.classList.add(msg.erro.class)
            ele.innerText = msg.erro.texto



        }
        ele.classList.remove('invisible')
        await util.timeO(1000)
        ele.classList.add('invisible')
    }

    static exibC(mostra = true){
        const carregar = document.querySelector('#carr')

        if(mostra){
            carregar.classList.remove('invisible')
            return;

        }
        carregar.classList.add('invisible')
    }
    static cont(){
        let contado = 4
        const ele = document.querySelector("#contador")
        const id = "$$contador"
        const textoP = `Começando em ${id} segundos...`

        const atua = ()=>
        (ele.innerHTML = textoP.replace(id, contado--) )

        atua()
        const idI = setInterval(atua,1000)

    }
    static limp(id){
        clearInterval(id)
        document.querySelector('#cont').innerHTML =''
    }

    static mostraT(click){
        const bt = document.querySelector("#Mostrar")
        bt.addEventListener('click', click)

    }
}

