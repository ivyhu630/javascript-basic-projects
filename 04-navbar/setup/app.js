// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.getElementsByClassName("nav-toggle")[0];
const links = document.getElementsByClassName("links")[0];

navToggle.addEventListener("click", () => {
  // if (!links.classList.contains("show-links")) {
  //   links.classList.add("show-links");
  // } else {
  //   links.classList.remove("show-links");
  // }
  links.classList.toggle("show-links");
})