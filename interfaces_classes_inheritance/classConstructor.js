var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ClassWithConstructor.prototype.getName = function () {
        return this.name;
    };
    return ClassWithConstructor;
}());
var clsWithCons = new ClassWithConstructor(10, 'sushil');
console.log(clsWithCons.getName());
