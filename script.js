function mostrarMensagem(){

    const texto = `
    Livia,
    
    Esse site foi feito só para você.
    
    Obrigado por cada momento
    e por fazer minha vida melhor.
    
    Te amo muito ❤️
    `
    
    document.getElementById("mensagem").innerText = texto
    
    }
    
    
    // CONTADOR DE DIAS
    function atualizarContador(){
    
    const dataInicio = new Date("2025-12-12");
    const hoje = new Date();
    
    const diferenca = hoje - dataInicio;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    document.getElementById("contador").innerHTML =
    "Estamos juntos há <br><b>" + dias + " dias ❤️</b>";
    
    }
    
    atualizarContador();