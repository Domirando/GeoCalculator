const pi = 3.14;
const r = document.querySelector('#radius').value
const l = document.querySelector('#length').value
const h = document.querySelector('#height').value
const data = document.querySelector('#data')
const calc = document.querySelector('#calc')
const result = document.querySelector('#result')
let v = document.querySelector('#v');
let s = document.querySelector('#s');

function calc() {
    v.innerHTML+=(pi*(h/3)*Math.pow(r, 2))
    s.innerHTML+=(pi*r*(r+l))
    data.style.display='none';
    result.style.display='block';  
}