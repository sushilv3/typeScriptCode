class ClassWithConstructor{
    id:number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;

    }
    getName():string{
        return this.name;
    }
}

let clsWithCons = new ClassWithConstructor(10, 'sushil');
    console.log(clsWithCons.getName());