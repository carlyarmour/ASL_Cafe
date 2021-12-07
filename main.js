var greeting = document.getElementById("greeting");
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
  greeting.textContent = ("Good Morning!");
} else if (hr == 12) {
  greeting.textContent = ("Good Noon!");
} else if (hr >= 12 && hr <= 17) {
  greeting.textContent = ("Good Afternoon!");
} else {
  greeting.textContent = ("Good Evening!");
}

// program to display text 5 times
const n = 5;
// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love java/tea! Or give chocolate!`);
}

function myFunction() {
  var javatea = document.getElementById("question").value;
  var parent = document.getElementById('image');
  var imagePath = "fullcoffee.jpg";

  for (let i = javatea; i > 0; i--) {
      var img = new Image();
      img.src = imagePath;
      parent.appendChild(img);
  }
}

var coffeeForm = document.getElementById("Coffee");
coffeeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  secondFunction();
});