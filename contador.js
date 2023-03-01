window.addEventListener('load', () => {

    const resposta = document.getElementById("contador")
    const btnDecrementar = document.querySelector("#decrementar")
    const btnZerar = document.getElementById("zerar")
    const btnIncrementar = document.querySelector("#incrementar")
    
    let contador = 0
    colorir()
    
    function colorir() {
        if(contador === 0){
            resposta.style.color = 'white'
        }
        
        else if(contador % 2 === 0) {
            resposta.style.color = 'green'
        }
        else {
            resposta.style.color = "red"
        }
    }
    
    function incrementar() {
        if (contador < 100) resposta.innerText = ++contador
        colorir()
        }
    
    function decrementar() {
        if (contador > -10) resposta.innerText = --contador
        colorir()
        }
    
    function zerar() {
        contador = 0 
        resposta.innerText = contador
        colorir()
        }        
    
        btnIncrementar.addEventListener('click', incrementar)
        btnDecrementar.addEventListener('click', decrementar)
        btnZerar.addEventListener('click', zerar)
    
    })
    