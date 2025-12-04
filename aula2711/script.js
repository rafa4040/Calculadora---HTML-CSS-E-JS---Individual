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

    if (conta) {
        let resultado = eval(conta);
        document.getElementById('display').value = resultado;

        salvarHistorico(conta, resultado);
        mostrarHistorico();
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
