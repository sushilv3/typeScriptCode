// class modifiers
var ClassC = /** @class */ (function () {
    function ClassC() {
    }
    return ClassC;
}());
var classC = new ClassC();
classC.id = 20;
console.log(classC);
var ClassD = /** @class */ (function () {
    function ClassD(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassD;
}());
var classD = new ClassD(20, 'Anil');
console.log(classD);
