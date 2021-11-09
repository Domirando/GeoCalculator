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
  const l = document.querySelector("#length").value;
  console.log(l);
  const h = document.querySelector("#height").value;
  const data = document.querySelector("#data");
  const result = document.querySelector("#result");

  let v = pi * (h / 3) * Math.pow(r, 2);
  let s = pi * r * (r + l);

  document.querySelector("#v").innerHTML =
    document.querySelector("#v").innerHTML + v;
  document.querySelector("#s").innerHTML =
    document.querySelector("#s").innerHTML + s;
}

back.addEventListener("click", (e) => {
  data.style.display = "block";
  result.style.display = "none";
});