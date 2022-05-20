var total = document.getElementById("total");
var resultado = document.getElementById("resultado");

var limpar = document.getElementById("limpar");

total.onclick = calcular;
limpar.onclick = zerar;

function calcular(){
    p1 = parseFloat(h1.innerHTML)
    p2 = parseFloat(h3.innerHTML)

    if(h2.innerText == "+"){
        resultado.innerText = p1+p2
    }
    else if(h2.innerText == "-"){
        resultado.innerText = p1-p2
    }
    else if(h2.innerText == "x"){
        resultado.innerText = p1*p2
    }
    else if(h2.innerText == "/"){
        resultado.innerText = p1/p2
    }
} 

function zerar(){
    h1.innerText = "0"
    h2.innerText = ""
    h3.innerText = ""
    hs = h1
    resultado.innerText = ""
}