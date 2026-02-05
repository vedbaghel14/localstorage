let box = document.querySelector('#box');
let btn = document.querySelector('button');

function randomcolor(){
    let red = Math.floor(Math.random()*256);
    let green =  Math.floor(Math.random()*256);
    let blue =  Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

btn.addEventListener('click',randomcolor);