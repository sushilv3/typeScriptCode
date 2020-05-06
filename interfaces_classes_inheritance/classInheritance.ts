interface IBase{
    id:number;

}

interface IDerivedFromBase extends IBase{
    name:string;
}

class BaseClass implements IBase{
    id:number;
}

class DerivedFromBase extends BaseClass implements IDerivedFromBase{
    name:string;
}


class BaseClassWithConst{
    private id:number;
    constructor(id:number){
        this.id = id;
    }
}

class DerivedClassWithConst extends BaseClassWithConst{
    private name:string;
    constructor(id:number, name:string){
        super(id);
        this.name = name;
    }
}