let arr = document.querySelectorAll('img');
let img1 = arr[0];
let img2 = arr[1];

let btn = document.querySelector('button');
btn.addEventListener('click',function(){
   let src1 = img1.getAttribute('src');
   let src2 = img2.getAttribute('src');
   img1.setAttribute('src',src2);
   img2.setAttribute('src',src1);
});

