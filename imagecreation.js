let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let image = document.createElement('img');
    image.setAttribute('src','https://raw.githubusercontent.com/saarthack/live1/a948d6bcfac4da3ff9f0d6fa9c014a2249f837df/img1.png')
    let x = Math.random()*80;
    let y = Math.random()*80;
    let z = Math.random()*80;

    image.style.left = x+'%';
    image.style.top = y+'%';
    image.style.position = 'absolute';
    image.style.rotate = z+'deg';
    
    document.body.appendChild(image);



});