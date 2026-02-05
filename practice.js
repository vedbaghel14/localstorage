let h5 = document.querySelector('h5');
let btn = document.querySelector('button');
let flag = true;
btn.addEventListener('click',function(){
    if(flag){
    h5.innerHTML = 'request sending.....';
    h5.style.color = 'yellow';
    btn.innerHTML = 'request send';
    h5.style.color = 'golden';
    btn.style.backgroundColor = 'yellow';
    setTimeout(function(){
    h5.innerHTML = 'friends';
    btn.innerHTML = 'Remove friend';
    h5.style.color = 'green';
    btn.style.backgroundColor = 'red'
    },2000)
    flag = false;

    }
    else{
        h5.innerHTML = 'stranger';
        btn.innerHTML = 'Add friend';
        h5.style.color = 'red';
        btn.style.backgroundColor = 'green'
        flag = true;
    }
})