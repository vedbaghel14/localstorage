let nav = document.querySelector('#nav');
let lasttopscroll = 0;
document.addEventListener('scroll',function(details){
    let currenttopscroll = window.scrollY;
    console.log(currenttopscroll);
    if(currenttopscroll>lasttopscroll){
        nav.style.transform = 'translateY(-150%)'
    }
    else{
        nav.style.transform = 'translateY(0)';
    }
    lasttopscroll = currenttopscroll;
   
})