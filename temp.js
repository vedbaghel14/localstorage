class Student{
    constructor(name,branch,subject,college,gender){
        this.name=name;
        this.branch=branch;
        this.subject=subject;
        this.college=college;
        this.gender=gender;
    }
};

let student1 = new Student("ved","CSBS","wed-devlopment","oist","Male");
let student2 = new Student("lucky","AIML","devops","lnct","Male");
console.log(student1);
function print(student){
    console.log(
        student.name,student.branch,student.subject,student.college,student.gender
    );

}

print(student1);
print(student2);