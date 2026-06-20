//step 1 - functions add, subtract, multiply, divide
function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1 / n2;
}

//step 2 - creating 3 variables
let number1;
let number2;
let operator;

//step 3 - 'operate' function
function operate(op, n1, n2) {
    if (op === "+") {
        return add(n1, n2);
    } else if (op === "-") {
        return subtract(n1, n2);
    } else if (op === "*") {
        return multiply(n1, n2);
    } else if (op === "/") {
        return divide(n1, n2);
    }
}

//step 5 - button functions