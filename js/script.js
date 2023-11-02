var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
var button = document.querySelector("button");

document.addEventListener("keydown", function (e) {
  var key = e.key;

  if (key === "1") {
    box1.innerHTML = "<p>&#128515</p>";
  }
  if (key === "2") {
    box2.innerHTML = "<p>&#128516</p>";
  }
  if (key === "3") {2
    box3.innerHTML = "<p>&#128516</p>";
  }
});

box1.addEventListener("click", function () {
  box1.innerHTML = "<p>&#128515</p>";
});

box2.addEventListener("click", function () {
  box2.innerHTML = "<p>&#128516</p>";
});

box3.addEventListener("click", function () {
  box3.innerHTML = "<p>&#128516</p>";
});

button.addEventListener("click", function () {
  box1.innerText = "1";
  box2.innerText = "2";
  box3.innerText = "3";
});
