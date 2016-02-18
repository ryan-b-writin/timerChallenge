var redDiv = document.getElementById("redDiv");
var button = document.getElementById("button");

var init = function() {
redDiv.style.backgroundColor = "red";
redDiv.style.height = "100px";
redDiv.style.width = "100px";
};

init();
// onClick event listener
button.addEventListener("click",function(event) {
console.log("button" );
Double();
Timer();
});

//double div size & change color
var Double = function() {
  redDiv.style.height = "200px";
  redDiv.style.width = "200px";
  redDiv.style.backgroundColor = "blue";
} ;

//undo changes after 3 sec.
var Timer = function(div) {
  timeoutID = window.setTimeout(init, 3000);
  timeoutID = window.setTimeout(console.log("timer"), 3000);
};

