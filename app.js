var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]


var pickedColor = colors[3];
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add event handler to squares
  squares[i].addEventListener("click", function() {
    // compare color of clicked square to pickedColor
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
      alert("correct");
    } else {
      alert("wrong");
    }
  });
}
