const screen = document.getElementById("screen");
const clear = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplyOp = document.getElementById("multiply");
const devideOp = document.getElementById("devide");
const equal = document.getElementById("equal");
const zero = document.querySelector(".zero");

clear.addEventListener("click", function() {
    screen.textContent = 0;
    op = "";
    num1 = "";
    num2 = "";
    result = "";
    console.log(`op = ${op}, num1 = ${num1}, num2 = ${num2}`);
});

const btns = document.querySelectorAll(".number");

for (const btn of btns) {
    btn.addEventListener("click", function() {
        if (!op) {  //for first input
            if (screen.textContent == 0) {
                screen.textContent = this.value;
                console.log("first input")
            } else {
                screen.textContent += this.value;
                console.log("second num")
            };
        };
        if (num1 && !num2) {
            screen.textContent = this.value;
            num2 = +screen.textContent;
            console.log(`(Z65)num2 = ${num2}`); 
        } else if (num1 && num2){
            screen.textContent += this.value;
            num2 = +screen.textContent;
            console.log(`(Z59)num2 = ${num2}`);
        };
        if (num1 === 0) {
            if(!num2) { 
                screen.textContent = this.value;
                num2 = +screen.textContent;
                console.log(`(Z27)num2 = ${num2}`); 
            } else {
                screen.textContent += this.value;
                num2 = +screen.textContent;
                console.log(`(Z31)num2 = ${num2}`);
            };
        };
    });
};

function add(a, b) {
    result = a + b
    return result;
};

function subtract(a, b) {
    result = a - b
    return result;
};

function multiply(a, b) {
    result = a * b
    return result;
};

function devide(a, b) {
    result = a / b
    return result;
};

let num1;
let op;
let num2;
let result;

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
        result = operate(num1, op, num2);
        screen.textContent = result;
        num2 = "";
        result = "";
    };
    op = "+";
    num1 = +screen.textContent;
    console.log(num1);
});

minus.addEventListener("click", function() {
    if (num1 && num2) {
        result = operate(num1, op, num2);
        screen.textContent = result;
        num2 = "";
        result = "";
    };
    op = "-";
    num1 = +screen.textContent;
    console.log(num1);
});

multiplyOp.addEventListener("click", function() {
    if (num1 && num2) {
        result = operate(num1, op, num2);
        screen.textContent = result;
        num2 = "";
        result = "";
    };
    op = "*";
    num1 = +screen.textContent;
    console.log(num1);
});

devideOp.addEventListener("click", function() {
    if (num1 && num2) {
        if(num2 === 0) {
            result = alert("invalid")
            return result;
        };
        result = operate(num1, op, num2);
        screen.textContent = result;
        num2 = "";
        result = "";
    };
    op = "/";
    num1 = +screen.textContent;
    console.log(num1);
});

equal.addEventListener("click", function() {
    if (!num1 && !(num1 === 0)) {
       result = alert("Please enter a Number!"); 
       return result;
    };
    if (num2 == 0 && op == "/") {
        result = alert("invalid");
        return result;
    } else {
        result = operate(num1, op, num2);
        screen.textContent = result;
        num1 = result;
        num2 = "";
        result = "";
    };
});