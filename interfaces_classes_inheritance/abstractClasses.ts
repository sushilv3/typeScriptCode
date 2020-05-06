//Abstract Classes
abstract class AbstractEmployee{
    public id: number;
    public name: string;
    abstract getDeatils():string;
    public printDeatils(){
        console.log(this.getDeatils());
    }

}
class NewEmployee extends AbstractEmployee{
    getDeatils():string{
        return `id : ${this.id}, name : ${this.name}`;
    };
}

class NewManager extends NewEmployee{
    public Employees: NewEmployee[];
    getDeatils():string{
        return super.getDeatils() + `, Employee Count ${this.Employees.length}`;
    };
}

let emp = new NewEmployee();
    emp.id = 10;
    emp.name = 'Anil';
    emp.printDeatils();

let mngr = new NewManager();
    mngr.id = 100;
    mngr.name = "New Manager";
    mngr.Employees = new Array();
    mngr.Employees.push(emp);
    mngr.printDeatils();



//both classes have same property its prob. 
class Employee{
    public id: number;
    public name:string;

    printDetails(){
        console.log(`id : ${this.id}, name ${this.name}`);
    }
}

class Manager{
    public id:number;
    public name:string;
    public Employee:Employee[];
    
    printDetails(){
        console.log(`id : ${this.id}, name ${this.name}, employeeCount: ${this.Employee.length}`);
    }
}