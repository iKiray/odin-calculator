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
const displayUpdate = document.querySelector("input");
document.getElementById("1").addEventListener("click", () => displayUpdate.value += 1);
document.getElementById("2").addEventListener("click", () => displayUpdate.value += 2);
document.getElementById("3").addEventListener("click", () => displayUpdate.value += 3);
document.getElementById("4").addEventListener("click", () => displayUpdate.value += 4);
document.getElementById("5").addEventListener("click", () => displayUpdate.value += 5);
document.getElementById("6").addEventListener("click", () => displayUpdate.value += 6);
document.getElementById("7").addEventListener("click", () => displayUpdate.value += 7);
document.getElementById("8").addEventListener("click", () => displayUpdate.value += 8);
document.getElementById("9").addEventListener("click", () => displayUpdate.value += 9);
document.getElementById("0").addEventListener("click", () => displayUpdate.value += 0);
document.getElementById("add").addEventListener("click", () => displayUpdate.value += " + ");
document.getElementById("subtract").addEventListener("click", () => displayUpdate.value += " - ");
document.getElementById("multiply").addEventListener("click", () => displayUpdate.value += " x ");
document.getElementById("divide").addEventListener("click", () => displayUpdate.value += " / ");
document.getElementById("clear").addEventListener("click", () => displayUpdate.value = "");