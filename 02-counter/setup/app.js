let count = 0;
const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const btns = document.querySelectorAll(".btn")

decrease.addEventListener("click", () => {
  count -= 1;
  value.textContent = count;
  changeColor();
})

reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
  changeColor();
})

increase.addEventListener("click", () => {
  count += 1;
  value.textContent = count;
  changeColor();
})

changeColor = () => {
  if (count) {
    value.style.color = "green";
  }
  if (count === 0) {
    value.style.color = "black";
  }
  if (count < 0) {
    value.style.color = "red";
  }
}