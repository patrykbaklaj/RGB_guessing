
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // handle mode buttons
  setupModeButtons();
  // event handler for squares
  setupSquares();

  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add event handler to squares
    squares[i].addEventListener("click", function() {
      // compare color of clicked square to pickedColor
      var clickedColor = this.style.backgroundColor;

      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
}



}


function reset(){
  //message reset
  messageDisplay.textContent = "";
  // button text reset
  resetButton.textContent = "New Colors";
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick random colors from array
  pickedColor = pickColor();
  // change color displacy to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function() {
  reset();
});


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
