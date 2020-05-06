function log(val:any):void{
console.log(val);
}

interface IComplexType{
    id:number;
    name:string;
    //optional properties
    address?:string;
}
//interface defination
let complexType : IComplexType = {id:1, name:'sushil'};

interface Point{
      x:number;
      //readonly property (getter)
      readonly y:number;
}

let p1:Point = {x:2, y:3};
p1.x = 6;
log(p1);

