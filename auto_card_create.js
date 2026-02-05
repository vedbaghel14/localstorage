let h1 = document.querySelector('h1');
let h4 = document.querySelector('h4');
let img = document.querySelector('img');

let array = [
  {
    "image" : 'https://plus.unsplash.com/premium_photo-1664868839978-8fba95c0cdc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzJTIwbWVufGVufDB8fDB8fHww',
    "name": "Aarav Sharma",
    "age": 24,
    "salary": 450000,
    "skills": ["Python", "SQL", "Data Analysis", "Excel"],
    "location": "Bengaluru",
    "status": "Stranger"

  },
  {
    "image" : 'https://images.unsplash.com/photo-1632958978877-69406b688b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzJTIwbWVufGVufDB8fDB8fHww',
    "name": "Neha Verma",
    "age": 28,
    "salary": 650000,
    "skills": ["Java", "Spring Boot", "REST APIs", "MySQL"],
    "location": "Pune"
  ,  "status": "Stranger"
  },
  {
    "image" : 'https://media.istockphoto.com/id/930163632/photo/laughing-bearded-young-man-with-hat-and-smoker.webp?a=1&b=1&s=612x612&w=0&k=20&c=pwIHZsyp8Wh2UgcL546vtRw6hXMlQsFdsS4ZLzirQ30=',
    "name": "Rohit Singh",
    "age": 32,
    "salary": 900000,
    "skills": ["JavaScript", "React", "Node.js", "MongoDB"],
    "location": "Delhi"
  ,  "status": "Stranger"

  },
  {
    "image" : 'https://media.istockphoto.com/id/1176789549/photo/handsome-gentleman-downtown.webp?a=1&b=1&s=612x612&w=0&k=20&c=DBwz_X7dBxhtbDshtsvW_MtsEW1gpuUMaUinwxCuNss=',
    "name": "Priya Patel",
    "age": 26,
    "salary": 520000,
    "skills": ["HTML", "CSS", "JavaScript", "UI/UX"],
    "location": "Ahmedabad",
    "status": "Stranger"

  },
  {
    "image" : 'https://media.istockphoto.com/id/1232773089/photo/portrait-of-a-young-handsome-african-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=dNBJxsrmIau-wufhNFZ1srpn_MrBjsIqAiRLRdn7f2Q=',
    "name": "Kunal Mehta",
    "age": 35,
    "salary": 1200000,
    "skills": ["AWS", "Docker", "Kubernetes", "DevOps"],
    "location": "Mumbai"
  ,  "status": "Stranger"

  }
];

function hero(){
    let sum = '';
array.forEach(function(obj,idx){
    sum +=   `<div id='box'><img src="${obj.image}" alt="">
        <h1>Name : ${obj.name}</h1>
        <h4>Age : ${obj.age}</h4>
        <h4>salary: ${obj.salary}</h4>
        <h4>skills: ${obj.skills}</h4>
        <h4>location : ${obj.location} </h4>
        <h4>Status : ${obj.status}</h4>
        <button id=${idx}>Add friend</button></div>`
});

let main = document.querySelector('#main');
main.innerHTML = sum;
}
hero();

main.addEventListener('click',function(dets){
    let diamond = dets.target.id;
    let gold = array[dets.target.id];
    if(gold.status == "Stranger"){
        gold.status = "friends";
    }
    else{
        gold.status = "Stranger";
    }
    hero();
})