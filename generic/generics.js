//Generics
function identify(arg) {
    return arg;
}
function identify1(arg) {
    return arg;
}
function identify3(arg) {
    return arg;
}
var c = identify3("hello");
var b = identify3(10);
var d = identify3('this is string');
//generic class
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
