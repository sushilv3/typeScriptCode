//Implementing Interfaces
interface IPerson{
     printf();
}
console.log('hello');

class ClassA implements IPerson{
    printf(){
        console.log('ClassA.printf()');
    }
}
let classA = new ClassA(); 
classA.printf();

class ClassB implements IPerson{
    printf(){
        console.log('ClassB.printf()');
    }
}

let classB = new ClassB(); 
classB.printf();

function printClass(a: IPerson){
    a.printf();

}