function onLoad(){
    const depe = {
        tela: tela,
        util: time
        
        
    }
    const jogo = new jogoDaMemoria(depe)
    jogo.inicializar()
   
}

window.onload = onLoad