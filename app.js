var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]


var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");


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
