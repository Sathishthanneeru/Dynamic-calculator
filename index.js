// let display=document.getElementById("display")
// function calc(event){
//     display.value+=event.target.value

// }
// function my_evaluate(){
//     display.value=eval(display.value)
// }
// function del(){
//     display.value=display.value.slice(0,-1)
// }
// function allclear(){
//     display.value=""
// }

// function calc(event) {
//     let lastNumber = display.value.split(/[\+\-\*\/%]/).pop();
//     let newChar = event.target.value;

//     if (newChar === "." && lastNumber.includes(".")) return;

//     display.value += newChar;
// }

let display = document.getElementById("display");

// Function to handle button clicks
function calc(event) {
  let lastChar = display.value.slice(-1);
  let newChar = event.target.value;

  // Prevent multiple operators in a row
  if ("+-*/%".includes(lastChar) && "+-*/%".includes(newChar)) {
    return;
  }

  // Prevent multiple decimal points in the same number
  let lastNumber = display.value.split(/[\+\-\*\/%]/).pop();
  if (newChar === "." && lastNumber.includes(".")) {
    return;
  }

  display.value += newChar;
}

// Function to evaluate the expression safely
function my_evaluate() {
  if (!display.value) return; // Prevent evaluation of empty input

  try {
    display.value = Function('"use strict"; return (' + display.value + ")")();
  } catch (error) {
    display.value = "Error"; // Show error message for invalid input
  }
}

// Function to delete the last character
function del() {
  display.value = display.value.slice(0, -1);
}

// Function to clear the display
function allclear() {
  display.value = "";
}
