//MENU HEADER -------------------------------------------
let novoPedido = document.getElementById("contNovo");
let pedidos = document.getElementById("contAntigos");
let menu = document.getElementsByTagName("header")[0]


function pedir(){
    novoPedido.style.display = "block"
    menu.style.backgroundColor = "#d33649"
    pedidos.style.display = "none"
};
function ver(){
    pedidos.style.display = "block"
    menu.style.backgroundColor = "#0f7d7e"
    novoPedido.style.display = "none"
};
//-------------------------------------------------------

//BOTÕES DE QUANTIDADE
let input = document.getElementsByClassName("input")
let menos = document.getElementsByClassName("subtrair")
let mais = document.getElementsByClassName("somar")






