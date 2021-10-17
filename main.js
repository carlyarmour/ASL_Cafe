var name = prompt("Please tell me your name: ");
while (name == 'null') {
    name = prompt("Please tell me your name: ");
}
if (name !== 'null') {
    alert("Welcome, " + name + "! Contact us if you need anything.");
}

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