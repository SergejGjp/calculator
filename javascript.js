const screen = document.getElementById("screen");
const clear = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplyOp = document.getElementById("multiply");
const devideOp = document.getElementById("devide");
const equal = document.getElementById("equal");
const zero = document.querySelector(".zero");

clear.addEventListener("click", function() {
    screen.innerHTML = 0;
    op = "";
    num1 = 0;
    num2 = 0;
    console.log(`op = ${op}, num1 = ${num1}, num2 = ${num2}`);
});

const btns = document.querySelectorAll(".number");

for (const btn of btns) {
    btn.addEventListener("click", function() {
        if (screen.innerHTML == 0) {
            screen.innerHTML = this.value;
        } else {
            screen.innerHTML += this.value;
        };
        if (num1) {
            screen.innerHTML = 0;
            if (screen.innerHTML == 0) {
                screen.innerHTML = this.value;
            } else {
                screen.innerHTML += this.value;
            };
            num2 = +screen.innerHTML;
            console.log(num2);
        }
    });
};

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
    if (num1 && num2) {
        let result = operate(num1, op, num2);
        screen.innerHTML = result;
    };
    op = "+";
    num1 = +screen.innerHTML;
    console.log(num1);
});

minus.addEventListener("click", function() {
    if (num1 && num2) {
        let result = operate(num1, op, num2);
        screen.innerHTML = result;
    };
    op = "-";
    num1 = +screen.innerHTML;
    console.log(num1);
});

multiplyOp.addEventListener("click", function() {
    if (num1 && num2) {
        let result = operate(num1, op, num2);
        screen.innerHTML = result;
    };
    op = "*";
    num1 = +screen.innerHTML;
    console.log(num1);
});

devideOp.addEventListener("click", function() {
    if (num1 && num2) {
        if(num2 == 0) {
            let result = alert("invalid")
            return result;
        };
        let result = operate(num1, op, num2);
        screen.innerHTML = result;
    };
    op = "/";
    num1 = +screen.innerHTML;
    console.log(num1);
});

equal.addEventListener("click", function() {
    if (num2 == 0 && op == "/") {
        let result = alert("invalid");
        return result;
    } else {
        let result = operate(num1, op, num2);
        screen.innerHTML = result;
    };
});