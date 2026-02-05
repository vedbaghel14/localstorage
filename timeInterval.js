let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let completed = document.querySelector('#completed');
let fill = document.querySelector('#fill');
btn.addEventListener('click',function(){
    let grow = 0;
   let id = setInterval(function(){
        grow++;
        h3.innerHTML = (grow)+'%';
        fill.style.width = grow+'%';

    },100)
    setTimeout(function(){
        clearInterval(id);
        btn.innerHTML = 'COMPLETED';
        btn.style.opacity = 0.5;
    },10000);

})