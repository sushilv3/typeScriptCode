//Inheritance
interface IBase{
    id:number;

}

interface IDerivedFromBase extends IBase{
    name:string;
}

class InterfaceInheritance implements IDerivedFromBase{
id:number;
name:string;
}