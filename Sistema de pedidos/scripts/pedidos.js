let pedidos1 = document.getElementById("pedidos1")

let coco = "Coco"
let cocoLei = "Coco com Leite Condensado"
let cocoNut = "Coco com Nutella"
let queijoGoi = "Queijo com Goiabada"
let morNut = "Morango com Nutella"

let queijoCoa = "Queijo Coalho"
let queijoMin = "Queijo Minas"
let peitoPer = "Peito de Peru"
let carneSec = "Carne Seca"
let frango = "Frango"


function submit() {


//doces
    if (input[0].value >= 1) {
        ar0 = input[0].value
        desc0 = coco + " : " + ar0
        console.log("pediu")
    } else {
        desc0 = ""
        console.log("error")
    }
    // ---------
    if (input[1].value >= 1) {
        ar1 = input[1].value
        desc1 = cocoLei + " : " + ar1
        console.log("pediu")
    } else {
        desc1 = ""
        console.log("error")
    }
    // -----------
    if (input[2].value >= 1) {
        ar2 = input[2].value
        desc2 = cocoNut + " : " + ar2
        console.log("pediu")
    } else {
        desc2 = ""
        console.log("error")
    }
    // -----------
    if (input[3].value >= 1) {
        ar3 = input[3].value
        desc3 = queijoGoi + " : " + ar3
        console.log("pediu")
    } else {
        desc3 = ""
        console.log("error")
    }
    // ----------
    if (input[4].value >= 1) {
        ar4 = input[4].value
        desc4 = morNut + " : " + ar4
        console.log("pediu")
    } else {
        desc4 = ""
        console.log("error")
    }
    // -------------

    //salgadas
    if (input[5].value >= 1) {
        ar5 = input[5].value
        desc5 = queijoCoa + " : " + ar5
        console.log("pediu")
    } else {
        desc5 = ""
        console.log("error")
    }
    // -------------
    if (input[6].value >= 1) {
        ar6 = input[6].value
        desc6 = queijoMin + " : " + ar6
        console.log("pediu")
    } else {
        desc6 = ""
        console.log("error")
    }
    // -------------
    if (input[7].value >= 1) {
        ar7 = input[7].value
        desc7 = peitoPer + " : " + ar7
        console.log("pediu")
    } else {
        desc7 = ""
        console.log("error")
    }
    // -------------
    if (input[8].value >= 1) {
        ar8 = input[8].value
        desc8 = carneSec + " : " + ar8
        console.log("pediu")
    } else {
        desc8 = ""
        console.log("error")
    }
    // -------------
    if (input[9].value >= 1) {
        ar9 = input[9].value
        desc9 = frango + " : " + ar9
        console.log("pediu")
    } else {
        desc9 = ""
        console.log("error")
    }
    // -------------



    let nPedido = document.getElementById("npedido")
    num = parseInt(nPedido.innerHTML)

    if (num <= 10) {
        num += 1
        nPedido.innerHTML = num
    }

    // representação na tela de pedidos
    pedidos1.innerHTML += 
        "<h4>Pedido #" + num + "</h4>" +
        "<ul><li>" + desc0 + "</li></ul>" +
        "<ul><li>" + desc1 + "</li></ul>" +
        "<ul><li>" + desc2 + "</li></ul>" +
        "<ul><li>" + desc3 + "</li></ul>" +
        "<ul><li>" + desc4 + "</li></ul>" +
        "<ul><li>" + desc5 + "</li></ul>" +
        "<ul><li>" + desc6 + "</li></ul>" +
        "<ul><li>" + desc7 + "</li></ul>" +
        "<ul><li>" + desc8 + "</li></ul>" +
        "<ul><li>" + desc9 + "</li></ul>" 

   

    //inputs retornam a 0
    for(i = 0; i < input.length; i++){
        input[i].value = 0
    }

    //aviso de pedido feito
    swal("Parabéns!", "Seu pedido está feito!", "success");
}

