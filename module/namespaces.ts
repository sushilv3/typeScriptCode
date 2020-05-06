//Namespaces

namespace FirstNameSpace{
    class NotExported{

    }
    export class NameSpaceClass{
        id:number;
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();

// let notExported = new FirstNameSpace.NotExported();