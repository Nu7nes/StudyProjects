var h2 = document.getElementById("operador");
var h1 = document.getElementById("valor");
var h3 = document.getElementById("valor2");

var buttoms = document.getElementsByTagName("input");

var n6 = buttoms[6];
var subt = buttoms[7];
var n1 = buttoms[8];
var adic = buttoms[3];
var n4 = buttoms[4];
var n5 = buttoms[5];
var n7 = buttoms[0];
var n8 = buttoms[1];
var n9 = buttoms[2];
var n3 = buttoms[10];
var mult = buttoms[11];
var n2 = buttoms[9];
var virg = buttoms[14];
var n0 = buttoms[13];
var ponto = buttoms[12];
var divs = buttoms[15];

n1.onclick = changeText;
n2.onclick = changeText;
n3.onclick = changeText;
n4.onclick = changeText;
n5.onclick = changeText;
n6.onclick = changeText;
n7.onclick = changeText;
n8.onclick = changeText;
n9.onclick = changeText;
n0.onclick = changeText;
virg.onclick = changeText;
ponto.onclick = changeText;
adic.onclick = changeOp;
subt.onclick = changeOp;
divs.onclick = changeOp;
mult.onclick = changeOp;



var hs = h1;
function changeText() {



    if (hs.innerText == "0") {
        hs.innerText = this.value;
        console.log("1");
    } else if (hs.innerText !== "0") {
        hs.innerText += this.value;
        console.log("2");
    } else {
        console.log("Error");
    };

    console.log(h1.innerText);
};

function changeOp() {
    hs = h3;
    h2.innerText = this.value;



};