function insert(num) {
    document.getElementById('display').value += num;
}

function clean() {
    document.getElementById('display').value = "";
}

function back() {
    let tela = document.getElementById('display').value;
    document.getElementById('display').value = tela.substring(0, tela.length - 1);
}

function calcular() {
    let conta = document.getElementById('display').value;

    if (conta) { // Apenas calcula se houver algo no display
        try {
            // Usar o Function constructor é uma alternativa mais segura que o eval().
            // Ele não tem acesso ao escopo local e previne injeção de código malicioso.
            // Substituímos os símbolos visuais (×, ÷) pelos operadores reais (*, /).
            const expressaoSegura = conta.replace(/×/g, '*').replace(/÷/g, '/');
            
            const resultado = new Function('return ' + expressaoSegura)();
            
            document.getElementById('display').value = resultado;
            salvarHistorico(conta, resultado);
            mostrarHistorico();
        } catch (error) {
            document.getElementById('display').value = "Erro";
        }
    }
}

function salvarHistorico(conta, resultado) {
    let hist = JSON.parse(localStorage.getItem("historico")) || [];
    hist.push(`${conta} = ${resultado}`);
    localStorage.setItem("historico", JSON.stringify(hist));
}

function mostrarHistorico() {
    let hist = JSON.parse(localStorage.getItem("historico")) || [];
    let box = document.getElementById("history-content");

    if (hist.length === 0) {
        box.innerHTML = "(vazio)";
        return;
    }

    box.innerHTML = hist.slice(-10).reverse().join("<br>");
}

window.onload = mostrarHistorico;
