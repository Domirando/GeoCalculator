const pi = 3.14;
const r = document.querySelector('#radius').value
const l = document.querySelector('#length').value
const h = document.querySelector('#height').value
const data = document.querySelector('#data')
const result = document.querySelector('#result')
let v = document.querySelector('#v').innerHTML;
let s = document.querySelector('#s').innerHTML;

function calc() {
    v+=(pi*(h/3)*Math.pow(r, 2))
    s+=(pi*r*(r+l))
    console.log(v + s)
    data.style.display='none';
    result.style.display='block';  
}