console.log('hello');
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.printf = function () {
        console.log('ClassA.printf()');
    };
    return ClassA;
}());
var classA = new ClassA();
classA.printf();
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.printf = function () {
        console.log('ClassB.printf()');
    };
    return ClassB;
}());
var classB = new ClassB();
classB.printf();
function printClass(a) {
    a.printf();
}
