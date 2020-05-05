
let name1: string = 'Sushil';
console.log(name1);

let x:number = 5;

let y: any = 5;

let names1: Array<String> = ['Alok', 'Anuj', 'Abhishek'];

let person: string = 'Manish';

let heightInCentimeter: number = 182.123123;

let names: String[] = ['Alok', 'Anuj', 'Abhishek'];

let tupleTest: [string, number, boolean] = ['kamlesh', 5, true];

 enum DOORSTATS{
        OPEN,
        CLOSED
 }
 function log(val: any) {
     console.log(val);
 }

 function tellJoke() : string {
     return 'this is joke';
 }
 console.log(tellJoke());
 console.log(log(5));

 //Union type

 var unionType: string | number;
 unionType = 'lucknow';
 unionType = 5;

 //type guards

 function addWithTypeGuards(val1: string|number, val2: string|number): string|number {
     return val1.toString() + val2.toString();
 }
 console.log(addWithTypeGuards('manish',6));

 //type aliases

 type StringOrNumber = string|number;

 function addWithAlias(arg1:StringOrNumber, arg2:StringOrNumber):StringOrNumber{
    return arg1.toString() + arg2.toString();
 }

 //null and undefined

 function testUndef(test: null|undefined){
     console.log('test parameter: ' + test);
 }

 //functions
 function addNumbers(a:number, b:number):number{
    return a+ b;
 }

 function addNumbers1(a:number, b:number):string{
    return (a+ b).toString();
 }

 var addString = function (a:string, b:string):string {
     return a+b;
 };


 function f1(val:any):void{
     console.log(val);
 }
 f1(addString('aashiyana ','sect.i'));

 //optional parameter must be last parameter

 var addNumber = function(a: number, b:number, c?:number){
     return a+b;
 };
 log(addNumber(4,7));

 //default and rest parameter
 
 function buildName(firstName:string, lastName:string = "verma"): string{
    return firstName+lastName;
 }

 log(buildName('amit '));
 log(buildName('amit ', 'kumar'));

 
 





