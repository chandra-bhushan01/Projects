const forms = document.querySelector("form");
const result = document.querySelector("#result");

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#h").value)/100;
  const weight = parseFloat(document.querySelector("#w").value);

  const res = (weight / (height * height)).toFixed(2);
  console.log(res);
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give valid height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give valid weight!";
  } else {
    result.innerHTML = res;
  }
});
