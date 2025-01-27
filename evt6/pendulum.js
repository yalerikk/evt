let ballFirst = document.getElementById("ball-first");
let ballLast = document.getElementById("ball-five");

ballFirst.addEventListener("click", startAnimate);
ballLast.addEventListener("click", finishAnimate);

function startAnimate() {
  ballFirst.classList.add("ballAnimateFirst");
  ballLast.classList.add("ballAnimateLast");
}

function finishAnimate() {
  ballLast.classList.add("ballLast");
  ballFirst.classList.add("ballOne");
}