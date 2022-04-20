var firstName = "Hunter";
var lastName = "Caparelli";
var age = 19;
var favoriteFood = "Lobster";

console.log(
  `My name is ${firstName}. I am ${age} years old and I love to eat ${favoriteFood}.`
);

var num = 2;
var result = num + num;

console.log(result);

var fullName = `${firstName} ${lastName}`;

console.log(fullName);

var accordions = document.querySelectorAll(".accordion");

function toggleAccordion() {
  this.classList.toggle("active");
}

accordions.forEach((accordion) => {
  accordion.addEventListener("click", toggleAccordion);
});
