var colors = generateRandomColors(6);


var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");


for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add event handler to squares
  squares[i].addEventListener("click", function() {
    // compare color of clicked square to pickedColor
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

// change colors of squares after correct pickedColor

function changeColors(color) {
  // loop throuh all squares and
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // change each color to match given color
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // maka an array
  var arr = [];
  // add num randoms colors to array
  for (var i = 0; i < num; i++) {
    // get rand color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  // make and string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
