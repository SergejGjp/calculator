const screen = document.getElementById("screen");
const clear = document.getElementById("ac");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplyOp = document.getElementById("multiply");
const devideOp = document.getElementById("devide");
const equal = document.getElementById("equal");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".decimal");
const negativeBtn = document.querySelector("#negative");
const percentBtn = document.querySelector("#percent");

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
});

// what if I add booleans to check if num1 or 2 has been declared

const btns = document.querySelectorAll(".number");

for (const btn of btns) {
    btn.addEventListener("click", function() {
        if (!op && !isDecimal) {  //for first input
            if (screen.textContent === "0") {
                screen.textContent = this.value;
            } else {
                screen.textContent += this.value;
            };
        };
        if (isDecimal) {
                screen.textContent += this.value;
                num2 = +screen.textContent;
        };
        if (num1 && !num2 && !isDecimal) {
            screen.textContent = this.value;
             dot.disabled = false;
            num2 = +screen.textContent;
        } else if (num1 && num2 && !isDecimal){
            screen.textContent += this.value;
            num2 = +screen.textContent;
        };
        if (num1 === 0 && !isDecimal) {
            if(!num2) { 
                screen.textContent = this.value;
                num2 = +screen.textContent;
                dot.disabled = false;
            } else {
                screen.textContent += this.value;
                num2 = +screen.textContent;
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

percentBtn.addEventListener("click", function() {
    let tempNo = Math.round((screen.textContent / 100) * 10000) / 10000;
    screen.textContent = tempNo;
    if (num1 || num1 === 0) {
        num2 = +screen.textContent;
    };
})

negativeBtn.addEventListener("click", function() {
    if (screen.textContent === "0") {
        screen.textContent = "0";
    } else if (!(screen.textContent[0] === "-")) {
        screen.textContent = `-${screen.textContent}`;
        if (num1 || num1 === 0) {
            num2 = +screen.textContent;
        };    
    } else {
        screen.textContent = screen.textContent.slice(1);
        if (num1 || num1 === 0) {
            num2 = +screen.textContent;
        };  
    };
})

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
        dot.disabled = true;
    };
});