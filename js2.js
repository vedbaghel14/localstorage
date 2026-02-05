// let teams = ['RCB','CSK','MI','PBKS','SRH','LSG','GT'];
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     let num = Math.floor(Math.random()*teams.length);
//     h3.innerHTML = teams[num];
//     let red = Math.floor(Math.random()*256);
//     let green =  Math.floor(Math.random()*256);
//     let blue =  Math.floor(Math.random()*256);
//     h1.style.color = `rgb(${blue},${green},${red})`;
//     h3.style.color = `rgb(${red},${green},${blue})`;
// });


let teams = [{
    name:'RCB',
    primarycolor:'red',
    secondarycolor:'blue'
},{
    name:'CSK',
    primarycolor:'green',
    secondarycolor:'yellow'
},{
    name:'MI',
    primarycolor:'pink',
    secondarycolor:'brown'
},{
    name:'PBKS',
    primarycolor:'red',
    secondarycolor:'orange'
},{
    name:'SRH',
    primarycolor:'orange',
    secondarycolor:'violet'
},{
    name:'LSG',
    primarycolor:'indigo',
    secondarycolor:'violet'
},{
    name:'GT',
    primarycolor:'blue',
    secondarycolor:'crimson'
}];

let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*teams.length);
    h3.innerHTML = teams[num].name;
    h3.style.color = teams[num].primarycolor;
    h3.style.backgroundColor = teams[num].secondarycolor;
});