function gerarTabuada() {
    let num = document.getElementById("numero").value;
    let div = document.getElementById("resultado");

    if (num === "") {
        div.innerHTML = "Digite um número!";
        return;
    }

    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += `${num} × ${i} = ${num * i}<br>`;
    }

    div.innerHTML = html;
}
