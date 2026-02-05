let div = document.querySelector('div');

div.addEventListener('click',function(){
div.classList.remove('heart');
div.classList.add('clickeffect');
setTimeout(function(){
    div.classList.remove('clickeffect');
    div.classList.add('heart');
},2000)

})