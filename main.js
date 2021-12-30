// to add function to the greeting prompts
function getGreeting() {
  var day = new Date();
  var hr = day.getHours();
  if (hr >= 0 && hr < 12) {
    return "Good Morning!";
  } else if (hr == 12) {
    return "Happy Noon!";
  } else if (hr >= 12 && hr <= 17) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
}
var greeting = document.getElementById("greeting");
greeting.textContent = getGreeting();
// end of greeting prompt
}

function myFunction() {
  var input = document.getElementById("result").value;
  if (input == 2) {
    document.getElementById("answer").innerHTML = "You got it!"
  } else {
    document.getElementById("answer").innerHTML = "Whoops, nope."
}
var cafeForm = document.getElementById("cafe");
cafeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  myFunction();
});

function secondFunction() {
  var javatea = document.getElementById("question").value;
  var parent = document.getElementById('image');
  var imagePath = "fullcoffee.jpg";

  for (let i = javatea; i > 0; i--) {
      var img = new Image();
      img.src = imagePath;
      parent.appendChild(img);
  }
}

var coffeeForm = document.getElementById("coffee");
coffeeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  secondFunction();
});