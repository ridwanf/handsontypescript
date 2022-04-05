const inputEl = document.querySelector("#userName")
console.log("input", inputEl);
const parEL = document.querySelector("#welcomeMsg");
inputEl.addEventListener("change", (e) => {
  parEL.innerHTML = `Welcome ${e.target.value}`;
});