const screen = document.getElementById("screen");
const clear = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplyOp = document.getElementById("multiply");
const devideOp = document.getElementById("devide");
const equal = document.getElementById("equal");

clear.addEventListener("click", () => screen.innerHTML = "");

const btns = document.querySelectorAll(".number");

for (const btn of btns) {
    btn.addEventListener("click", function() {screen.innerHTML += this.value})
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function devide(a, b) {
    return a / b;
};

let num1;
let op;
let num2;

function operate(a, op, b) {
    a = num1;
    op = op;
    b = num2;
    
}