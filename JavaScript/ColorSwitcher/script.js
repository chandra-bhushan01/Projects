const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function (b) {
  b.style.backgroundColor = b.id;
});

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    body.style.backgroundColor = btn.id;
  });
});
