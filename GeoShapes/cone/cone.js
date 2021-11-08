const pi = 3.14;
const r = document.querySelector('#radius').value
console.log(r)
const l = document.querySelector('#length').value
console.log(l)
const h = document.querySelector('#height').value
const data = document.querySelector('#data')
const result = document.querySelector('#result')
let v = document.querySelector('#v').innerHTML;
let s = document.querySelector('#s').innerHTML;
v+=(pi*(h/3)*Math.pow(r, 2))
    s+=(pi*r*(r+l))
    console.log(v+s)
function calc() {
    
    data.style.display='none';
    result.style.display='block';  
}