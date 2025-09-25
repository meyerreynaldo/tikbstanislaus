// Active Toggle
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Hide menu when clicked outside the zone

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var myDate = new Date();
var hrs = myDate.getHours();
var mins = date.getMinutes();
var greet;

if (hrs >= 12 && hrs <= 11.59)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('TIME').innerHTML =
    '<b>' + greet;