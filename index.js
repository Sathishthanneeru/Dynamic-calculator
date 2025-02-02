let display = document.getElementById("display");

function calc(event) {
  let lastChar = display.value.slice(-1);
  let newChar = event.target.value;

  if ("+-*/%".includes(lastChar) && "+-*/%".includes(newChar)) {
    return;
  }

  let lastNumber = display.value.split(/[\+\-\*\/%]/).pop();
  if (newChar === "." && lastNumber.includes(".")) {
    return;
  }

  display.value += newChar;
}

function my_evaluate() {
  if (!display.value) return;

  try {
    display.value = Function('"use strict"; return (' + display.value + ")")();
  } catch (error) {
    display.value = "Error";
  }
}

function del() {
  display.value = display.value.slice(0, -1);
}

function allclear() {
  display.value = "";
}
