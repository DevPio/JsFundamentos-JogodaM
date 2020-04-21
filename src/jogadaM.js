class jogoDaMemoria{

    constructor({ tela, util }){
        this.tela = tela,
        this.util = util
        this.herois = [
            {img:'./imagens/batman.png',nome:'batman'},
            {img:'./imagens/ciclop.png',nome:'ciclop'},
            {img:'./imagens/deadpool.png',nome:'deadpool'},
            {img:'./imagens/mulhermaravilha.png',nome:'mulhermaravilha'},
            



        ]
        this.padrao = './imagens/default.png'
        this.econd = []
        this.herosS = []

    }
    inicializar(){
        this.tela.atuI(this.herois)
        this.tela.emba(this.clicar.bind(this))
        this.tela.confi(this.verificaS.bind(this))
        this.tela.mostraT(this.mostrar.bind(this))
    }
   async embar(){
        const copia = this.herois
        .concat(this.herois)
        
        .map((item)=>{
            return Object.assign({},item, {
                id: Math.random()/0.5
            })
        })
        .sort(()=> Math.random()-0.5)
        this.tela.atuI(copia)
        this.tela.exibC()
        const id = this.tela.cont()
       await this.util.timeO(4000)
            this.tela.limp(id)
        
            this.esconderH(copia)
            this.tela.exibC(false)
    }
    clicar(){
        this.embar()

    }
    esconderH(herois){

        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.padrao
        }))

        this.tela.atuI(heroisOcultos)
        this.econd = heroisOcultos

    }
    verificaS(id,nome){
        const item = {id, nome,}
        // alert(`${item.id} ${item.nome}`)
        const herosS = this.herosS.length
        switch(herosS){
            case 0:
                this.herosS.push(item)
                break;
            case 1:

                const [op1 ] = this.herosS
                this.herosS = []

                if(op1.nome == item.nome && op1.id !== item.id){
                   
                    this.exibirHerois(item.nome)
                    this.tela.exiM()
                    return;
                }

                this.tela.exiM(false)
                break;
        }

    }
    exibirHerois(nomeH){

        const {img } = this.herois.find(({ nome })=> nomeH === nome)
        this.tela.exibirHerois(nomeH, img)

    }
    mostrar(){
        const herois = this.econd

        for(const heroi of herois){
          const {img} =  this.herois.find(item=> item.nome === heroi.nome)
          heroi.img = img
        }

        this.tela.atuI(herois)
    }

}
