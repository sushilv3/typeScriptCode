// class modifiers
class ClassC{
    //public property
    public id:number;

    readonly name:string;

    //private
    // private name:string;
}

let classC = new ClassC();
classC.id = 20;
console.log(classC);

class ClassD{
   constructor(public id:number, private name:string){

   }
}
 
let classD = new ClassD(20, 'Anil');
console.log(classD);


