var x = 50;
console.log(x);

const y = 20;
console.log(y);
// y = 30;
// console.log(y);

var name = 'sushil';

function createName(fName, lName) {
    name = fName + " " + lName;
    console.log(name);
}
console.log(name);
createName('sunil', 'verma');

const days = ["Monday"];
days.push = "tuesday";
console.log(days);

const person = {
    f_name: 'abc'
}

const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function() {
        alert("Button " + i + " pressed");
        console.log(i);
    })
}
document.write('<br>');
document.write('<br>');
let fname = 'Manish';
console.log('Hello ' + fname);
console.log(`Hello ${fname}`);

function print(fname, age, profession, gender) {

    document.write(`Name ${fname} <br>
                    Age ${age} <br>
                    Profession ${profession} <br>
                    Gender ${gender} <br> <br>`);

    document.write("Name: " + fname);
    document.write("Age: " + age);
    document.write("Profession: " + profession);
    document.write("Gender: " + gender);
}
print("Prince", 29, "Programmer", "Male");

let manish = ['Manish', 26, 'Programmer', 'Playing mobile games'];
let rohit = ['rohit', 36, 'Java Programmer', 'Playing football'];
let manoj = ['manoj', 60, 'Pythan Programmer', 'Playing cricket'];

let people = [manish, rohit];
console.log(people);

//map

let person1 = new Map();

person1.set('name1', 'sushil1');
person1.set('name2', 'sushil2');
person1.set('name3', 'sushil3');
console.log(person1.get('name2'));
console.log(person1.has('name2'));
console.log(person1.keys());
console.log(person1.values());
person1.forEach(function(person) {
    console.log(person);
})

//set

let numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 9];
let numSet = new Set(numberSet);

console.log(numSet);