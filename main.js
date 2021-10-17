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