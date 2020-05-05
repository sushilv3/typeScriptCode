//class

// function rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// let rect = new rectangle(20, 20);
// console.log(rect);

class person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}

let sushil = new person('sushil', 29, 'programmer');
console.log(sushil);

class student extends person {
    constructor(name, age, school, grade) {
        super(name, age);
        this.school = school;
        this.grade = grade;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setName(age) {
        this.age = age;
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }

    getGrade() {
        return this.grade;
    }
    setGrade(grade) {
        this.grade = grade;
    }
}

let manish = new student('manish', 32, 'IT', 'javaScript');
console.log(manish);