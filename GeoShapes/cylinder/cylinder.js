const calc = document.querySelector("#calc");
const back = document.querySelector("#back");
const pi = 3.14;

calc.addEventListener("click", (e) => {
  e.preventDefault();
  Calculate();
  data.style.display = "none";
  result.style.display = "block";
});

function Calculate() {
  const r = document.querySelector("#radius").value;
  console.log(r);
  const h = document.querySelector("#height").value;
  const data = document.querySelector("#data");
  const result = document.querySelector("#result");

  let v = pi * h * Math.pow(r, 2);
  let s = 2 * pi * r * (h * (r + h));

  document.querySelector("#v").innerHTML =
    document.querySelector("#v").innerHTML + v;
  document.querySelector("#s").innerHTML =
    document.querySelector("#s").innerHTML + s;
  document.querySelector("#r").innerHTML =
    document.querySelector("#r").innerHTML + r;
  document.querySelector("#h").innerHTML =
    document.querySelector("#h").innerHTML + h;  
}

back.addEventListener("click", (e) => {
  data.style.display = "block";
  result.style.display = "none";
});