const calc = document.querySelector("#calc");
const back = document.querySelector("#back");

function calc(e) {
    e.preventDefault();
    const pi = 3.14;
    Calculate();
    data.style.display = "none";
    result.style.display = "block";
}

function back() {
    data.style.display = "block";
    result.style.display = "none";
}

export { calc, };