var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var r1 = document.getElementById("r1");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var input = document.querySelector("input");
var winscore = 5;
var countp1 = 0;
var countp2 = 0;
var gameover = false;
var heading = document.getElementById("play");
var note = document.querySelectorAll("li");

p1.addEventListener("click", () => {
  if (countp1 < winscore && gameover == false) {
    countp1 = countp1 + 1;
    d1.textContent = countp1;
  }
  if (countp1 === winscore) {
    gameover = true;
    d1.classList.add("winner");
  }
});
p2.addEventListener("click", () => {
  if (countp2 < winscore && gameover == false) {
    countp2 = countp2 + 1;
    d2.textContent = countp2;
  }
  if (countp2 === winscore) {
    gameover = true;
    d2.classList.add("winner");
  }
});

r1.addEventListener("click", () => reset());

function reset() {
  countp1 = 0;
  d1.textContent = countp1;
  countp2 = 0;
  d2.textContent = countp2;
  gameover = false;
  d1.classList.remove("winner");
  d2.classList.remove("winner");
  input.value = "";
}
input.addEventListener("change", () => {
  countp1 = 0;
  d1.textContent = countp1;
  countp2 = 0;
  d2.textContent = countp2;
  gameover = false;
  d1.classList.remove("winner");
  d2.classList.remove("winner");
  winscore = Number(input.value);
});

// to add hover effect
heading.addEventListener("mouseover", () => heading.classList.add("change"));
heading.addEventListener("mouseout", () => heading.classList.remove("change"));

for (var i = 0; i < note.length; i++) {
  note[i].addEventListener("mouseover", () => this.classList.add("change"));
  note[i].addEventListener("mouseout", () => this.classList.remove("change"));
}
