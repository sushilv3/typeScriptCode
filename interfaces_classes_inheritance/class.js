//classes
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.print() called");
        console.log("SimpleClass has id: " + this.id);
    };
    return SimpleClass;
}());
//this keyword
var mySmCls = new SimpleClass();
mySmCls.id = 123654;
mySmCls.print();
