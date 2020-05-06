var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract Classes
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    AbstractEmployee.prototype.printDeatils = function () {
        console.log(this.getDeatils());
    };
    return AbstractEmployee;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDeatils = function () {
        return "id : " + this.id + ", name : " + this.name;
    };
    ;
    return NewEmployee;
}(AbstractEmployee));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    function NewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewManager.prototype.getDeatils = function () {
        return _super.prototype.getDeatils.call(this) + (", Employee Count " + this.Employees.length);
    };
    ;
    return NewManager;
}(NewEmployee));
var emp = new NewEmployee();
emp.id = 10;
emp.name = 'Anil';
emp.printDeatils();
var mngr = new NewManager();
mngr.id = 100;
mngr.name = "New Manager";
mngr.Employees = new Array();
mngr.Employees.push(emp);
mngr.printDeatils();
//both classes have same property its prob. 
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.printDetails = function () {
        console.log("id : " + this.id + ", name " + this.name);
    };
    return Employee;
}());
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.printDetails = function () {
        console.log("id : " + this.id + ", name " + this.name + ", employeeCount: " + this.Employee.length);
    };
    return Manager;
}());
