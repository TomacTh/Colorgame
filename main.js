var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init ();

function init (){
  //mode button
  setUpModeButtons();
  setUpSquares();
  resetf();
}

function setUpModeButtons(){
  for(var i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function() {
      this.classList.add("selected");
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      resetf();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i<squares.length; i++){
    //add initial colors to squares 
    squares[i].style.backgroundColor = colors[i];
  
    squares[i].addEventListener("click", function(){
      var colorClicked = this.style.backgroundColor;
      
      if(colorClicked===pickedColor){
        message.textContent = "Correct!"; 
        reset.textContent = "Play again?"
        changeColor(pickedColor); 
        h1.style.background = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
      }
    });
  }
}


function resetf() {
  colors = generateRandomColors(numSquares);
  //pink a new random color from array
  pickedColor =  pickColor();
  //changeColorDisplay to match with picked color
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors"
  message.textContent = "";
  //change colors of squares
  for(var i = 0; i<squares.length; i++){
    //add initial colors to squares $
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none" ;
//     }
//   }
// })

// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block" ;
//   }
// })


reset.addEventListener("click", resetf);

colorDisplay.textContent = pickedColor;



function changeColor(color){
  for(var i = 0; i<squares.length; i++)
  squares[i].style.backgroundColor = color; 
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
} 

function generateRandomColors(num){
  //make an array
  arr = [];
  //repeat num times
  for (var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

  function randomColor(){
    //generate red between 0 and 255
    var r = Math.floor(Math.random() * 256);
    //generate green between 0 and 255
    var g = Math.floor(Math.random() * 256);
    //generate blue between 0 and 255
    var b =Math.floor(Math.random() * 256);
    return "rgb(" + r  + ", " + g + ", " + b + ")";
  }