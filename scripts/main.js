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
let num1 = "";
let num2 = "";
let oprt = "";
let result = "";

//step 3 - 'operate' function
function operate(op, n1, n2) {
    if (op === "add") {
        return add(n1, n2);
    } else if (op === "subtract") {
        return subtract(n1, n2);
    } else if (op === "multiply") {
        return multiply(n1, n2);
    } else if (op === "divide") {
        return divide(n1, n2);
    }
}

//step 5 - button functions
const display = document.querySelector("input");
document.getElementById("1").addEventListener("click", () => {
    if((result !== "") && (display.value !== "") ) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 1;
    } else {
        display.value += 1;
    }
});
document.getElementById("2").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 2;
    } else {
        display.value += 2;
    }
});
document.getElementById("3").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 3;
    } else {
        display.value += 3;
    }
});
document.getElementById("4").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 4;
    } else {
        display.value += 4;
    }
});
document.getElementById("5").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 5;
    } else {
        display.value += 5;
    }
});
document.getElementById("6").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 6;
    } else {
        display.value += 6;
    }
});
document.getElementById("7").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 7;
    } else {
        display.value += 7;
    }
});
document.getElementById("8").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 8;
    } else {
        display.value += 8;
    }
});
document.getElementById("9").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 9;
    } else {
        display.value += 9;
    }
});
document.getElementById("0").addEventListener("click", () => {
    if ((result !== "") && (display.value !== "")) {
        num1 = "";
        num2 = "";
        oprt = "";
        result = "";
        display.value = "";
        display.value += 0;
    } else {
        display.value += 0;
    }
});
//Extra Credit
document.getElementById(".").addEventListener("click", () => {
    if (display.value.indexOf(".") !== -1) {
        return;
    }
    display.value += "."
});
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
    num1 = "";
    num2 = "";
    oprt = "";
    result = "";
});
//Extra Credit
document.getElementById("backspace").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
//step 6 - make the operate function work properly
//step 7 - fixing bugs
document.getElementById("add").addEventListener("click", () => {
    if (oprt !== "") {
        return;
    } else if (result !== "") {
        num1 = result;
        oprt = "add";
        display.value = "";
    } else {
        num1 = display.value;
        oprt = "add";
        display.value = "";
    };
});
document.getElementById("subtract").addEventListener("click", () => {
    if (oprt !== "") {
        return;
    } else if (result !== "") {
        num1 = result;
        oprt = "subtract";
        display.value = "";
    } else {
        num1 = display.value;
        oprt = "subtract";
        display.value = "";
    };
});
document.getElementById("multiply").addEventListener("click", () => {
    if (oprt !== "") {
        return;
    } else if (result !== "") {
        num1 = result;
        oprt = "multiply";
        display.value = "";
    } else {
        num1 = display.value;
        oprt = "multiply";
        display.value = "";
    };
});
document.getElementById("divide").addEventListener("click", () => {
    if (oprt !== "") {
        return;
    } else if (result !== "") {
        num1 = result;
        oprt = "divide";
        display.value = "";
    } else {
        num1 = display.value;
        oprt = "divide";
        display.value = "";
    };
});
document.getElementById("equal").addEventListener("click", () => {
    if (!oprt) return;
    if ((display.value === "0") && (oprt === "divide")) {
        display.value = "Nice try!";
        return;
    };
    num2 = display.value;
    display.value = +operate(oprt, +num1, +num2).toFixed(4);
    result = display.value;
    num1 = "";
    num2 = "";
    oprt = "";
});