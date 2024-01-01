const screen = document.getElementById("screen");
const clear = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplyOp = document.getElementById("multiply");
const devideOp = document.getElementById("devide");
const equal = document.getElementById("equal");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".decimal");

let num1;
let op;
let num2;
let result;
let isDecimal = false;


clear.addEventListener("click", function() {
    screen.textContent = 0;
    op = "";
    num1 = "";
    num2 = "";
    result = "";
    isDecimal = false;
    dot.disabled = false;
    console.log(`op = ${op}, num1 = ${num1}, num2 = ${num2}`);
});

const btns = document.querySelectorAll(".number");

for (const btn of btns) {
    btn.addEventListener("click", function() {
        if (!op && !isDecimal) {  //for first input
            if (screen.textContent === "0") {
                screen.textContent = this.value;
                console.log("first input")
            } else {
                screen.textContent += this.value;
                console.log("second num")
            };
        };
        if (isDecimal) {
                screen.textContent += this.value;
                num2 = +screen.textContent;
                console.log("this2")
        };
        if (num1 && !num2 && !isDecimal) {
            screen.textContent = this.value;
             dot.disabled = false;
            num2 = +screen.textContent;
            console.log(`(Z65)num2 = ${num2}`); 
        } else if (num1 && num2 && !isDecimal){
            screen.textContent += this.value;
            num2 = +screen.textContent;
            console.log(`(Z59)num2 = ${num2}`);
        };
        if (num1 === 0 && !isDecimal) {
            if(!num2) { 
                screen.textContent = this.value;
                num2 = +screen.textContent;
                dot.disabled = false;
                console.log(`(Z27)num2 = ${num2}`); 
            } else {
                screen.textContent += this.value;
                num2 = +screen.textContent;
                console.log(`(Z31)num2 = ${num2}`);
            };
        };
    });
};

dot.addEventListener("click", function() {
    if (screen.textContent === "0") {
        screen.textContent = "0.";
        isDecimal = true;
        dot.disabled = true;
    } else {
        screen.textContent += this.value;
        isDecimal = true;
        dot.disabled = true;
    }
});

function add(a, b) {
    result = a + b
    result = Math.round(result * 100) / 100
    return result;
};

function subtract(a, b) {
    result = a - b
    result = Math.round(result * 100) / 100
    return result;
};

function multiply(a, b) {
    result = a * b
    result = Math.round(result * 100) / 100
    return result;
};

function devide(a, b) {
    result = a / b
    result = Math.round(result * 100) / 100
    return result;
};

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
    num2 = "";
    isDecimal = false;
    console.log(num1);
});

minus.addEventListener("click", function() {
    if (num1 && num2) {
        result = operate(num1, op, num2);
        screen.textContent = result;
        num2 = "";
        result = "";
        isDecimal = false;
        dot.disabled = false;
    };
    op = "-";
    num1 = +screen.textContent;
    num2 = "";
    isDecimal = false;
    console.log(num1);
});

multiplyOp.addEventListener("click", function() {
    if (num1 && num2) {
        result = operate(num1, op, num2);
        screen.textContent = result;
        num2 = "";
        result = "";
        isDecimal = false;
    };
    op = "*";
    num1 = +screen.textContent;
    num2 = "";
    isDecimal = false;
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
        isDecimal = false;
    };
    op = "/";
    num1 = +screen.textContent;
    num2 = "";
    isDecimal = false;
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
        isDecimal = false;
    };
});