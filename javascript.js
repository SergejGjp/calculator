const screen = document.getElementById("screen");
const clear = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplyOp = document.getElementById("multiply");
const devideOp = document.getElementById("devide");
const equal = document.getElementById("equal");
const zero = document.querySelector(".zero");

clear.addEventListener("click", function() {
    screen.innerHTML = "";
    op = "";
    num1 = 0;
    num2 = 0;
    console.log(`op = ${op}, num1 = ${num1}, num2 = ${num2}`);
});

const btns = document.querySelectorAll(".number");

for (const btn of btns) {
    btn.addEventListener("click", function() {screen.innerHTML += this.value});
};

zero.addEventListener("click", function() {
    if (screen.innerHTML == 0) {
        screen.innerHTML = 0;
    } else {
        screen.innerHTML += 0;
    };
});

function add(a, b) {
    let result = a + b
    return result;
};

function subtract(a, b) {
    let result = a - b
    return result;
};

function multiply(a, b) {
    let result = a * b
    return result;
};

function devide(a, b) {
    let result = a / b
    return result;
};

let num1;
let op;
let num2;

function operate(a, op, b) {
    if (op == "+") {
       return add(a, b)
    } else if (op == "-") {
        return subtract(a, b)
    } else if (op == "*") {
        return multiply(a, b)
    } else if (op == "/") {
        return devide(a, b)
    };
};

plus.addEventListener("click", function() {
    op = "+";
    num1 = +screen.innerHTML;
    screen.innerHTML = "";
    console.log(num1);
});

minus.addEventListener("click", function() {
    op = "-";
    num1 = +screen.innerHTML;
    screen.innerHTML = "";
    console.log(num1);
});

multiplyOp.addEventListener("click", function() {
    op = "*";
    num1 = +screen.innerHTML;
    screen.innerHTML = "";
    console.log(num1);
});

devideOp.addEventListener("click", function() {
    op = "/";
    num1 = +screen.innerHTML;
    screen.innerHTML = "";
    console.log(num1);
});

equal.addEventListener("click", function() {
    num2 = +screen.innerHTML;
    if (num2 == 0 && op == "/") {
        let result = alert("invalid");
        return result;
    } else {
        console.log(num2);
        let result = operate(num1, op, num2);
        screen.innerHTML = result;
    };
})

// make the operations in the operator button, so that equal only shows result?