var name1 = 'Sushil';
console.log(name1);
var x = 5;
var y = 5;
var names1 = ['Alok', 'Anuj', 'Abhishek'];
var person = 'Manish';
var heightInCentimeter = 182.123123;
var names = ['Alok', 'Anuj', 'Abhishek'];
var tupleTest = ['kamlesh', 5, true];
var DOORSTATS;
(function (DOORSTATS) {
    DOORSTATS[DOORSTATS["OPEN"] = 0] = "OPEN";
    DOORSTATS[DOORSTATS["CLOSED"] = 1] = "CLOSED";
})(DOORSTATS || (DOORSTATS = {}));
function log(val) {
    console.log(val);
}
function tellJoke() {
    return 'this is joke';
}
console.log(tellJoke());
console.log(log(5));
//Union type
var unionType;
unionType = 'lucknow';
unionType = 5;
//type guards
function addWithTypeGuards(val1, val2) {
    return val1.toString() + val2.toString();
}
console.log(addWithTypeGuards('manish', 6));
function addWithAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
//null and undefined
function testUndef(test) {
    console.log('test parameter: ' + test);
}
//functions
function addNumbers(a, b) {
    return a + b;
}
function addNumbers1(a, b) {
    return (a + b).toString();
}
var addString = function (a, b) {
    return a + b;
};
function f1(val) {
    console.log(val);
}
f1(addString('aashiyana ', 'sect.i'));
//optional parameter must be last parameter
var addNumber = function (a, b, c) {
    return a + b;
};
log(addNumber(4, 7));
//default and rest parameter
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "verma"; }
    return firstName + lastName;
}
log(buildName('amit '));
log(buildName('amit ', 'kumar'));
