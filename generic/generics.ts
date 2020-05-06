//Generics

function identify(arg:number):number{
    return arg;
}

function identify1(arg: any):any{
    return arg;
}

function identify3<T>(arg:T):T{
    return arg;
}

let c = identify3("hello");

let b = identify3<number>(10);

let d = identify3<string>('this is string');

//generic interfaces

interface GenericInterface<T>{
    (arg: T):T;
}

//generic class
class GenericClass<T>{
    zeroValue: T;
    //function with return generic type
    add: (x:T, y:T) => T;
}


