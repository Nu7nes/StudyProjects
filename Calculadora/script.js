const cards = ["C", "()", "+", 1, 2, 3, "-", 4, 5, 6, "*", 7, 8, 9, "/", ".", 0, "="]
let calcs = []
//÷

function initializeCalc() {
    let board = document.getElementById("board");

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = "button" + card;
        if (card === "=") { cardElement.id = "buttonEqual" }
        if (card === "()") { cardElement.id = "buttonParenth" }
        if (card === "%") { cardElement.id = "buttonPercent" }
        if (card === "+") { cardElement.id = "buttonMore" }
        if (card === "-") { cardElement.id = "buttonSub" }
        if (card === "*") { cardElement.id = "buttonMulti" }
        if (card === "/") { cardElement.id = "buttonDiv" }
        if (card === ".") { cardElement.id = "buttonPoint" }
        cardElement.classList.add("btn");
        cardElement.innerText = card
        cardElement.addEventListener('click', insertNumber)
        board.appendChild(cardElement);
    })
}

initializeCalc()

const display = document.getElementById("display");

function insertNumber(event) {
    console.log(event.target)
    if (event.target.id === "buttonEqual"
        || event.target.id === "buttonC"
        || event.target.id === "buttonParenth"
        || event.target.id === "buttonPercent") {
        if (event.target.id === "buttonEqual") {
            resultCalc(event)
        }
        if (event.target.id === "buttonC") {
            resetCalc()
        }
        if (event.target.id === "buttonParenth") {
            addParentheses()
        }
        if (event.target.id === "buttonPercent") {
            addPercent()
        }
    } else {
        calcs.push(event.target.innerText)

        if (display.innerText == "0") {
            display.innerText = event.target.innerText
        } else {
            display.innerText += event.target.innerText
        }
    }
}

let result = document.getElementById("result");
function resultCalc(event) {
    result.innerText = eval(display.innerText)
}

function resetCalc() {
    display.innerText = "0"
    result.innerText = " "
}

let parenthesesDisplay = false
function addParentheses() {
    // let displayContent = display.innerText;
    // console.log(displayContent)
    if (parenthesesDisplay) {
        display.innerText += ")"
        parenthesesDisplay = false
    } else {
        display.innerText += "("
        parenthesesDisplay = true
    }
}

function addPercent() {
    display.innerText += "%"
}

function checkPercent() {
    display.innerText.forEach(item => {
        if(item === "%"){
            console.log("%")
        } else {
            return 
        }
        
        return display.innerText
    })
}