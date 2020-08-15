class Student {
    constructor (firstname, lastname, year){
        this.firstname1 = firstname;
        this.lastname1= lastname;
        this.grade = year;
        this.scores = [];
    }
    addscore(value){
         this.scores.push(value);
         return this.scores;
    } 
}
let firststudent = new Student("ambuj", "mehra", 12);
console.log(firststudent.addscore(10));