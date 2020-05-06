//classes

class SimpleClass {
    id:number;
    print():void{
        console.log(`SimpleClass.print() called`);
        console.log(`SimpleClass has id: ${this.id}`);
    }
}

//this keyword

let mySmCls = new SimpleClass();
mySmCls.id = 123654;
mySmCls.print();