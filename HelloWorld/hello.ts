interface Printable{
    empId?: number;
    empName?:string;
    color?:string;
    shape?:string
      
}
let circle:Printable={
    color:"Red",
    shape:"Circle"
}
let employee:Printable={
    empId:101,
    empName:"John"
}
function printAll(obj){
    return Object.getOwnPropertyNames(obj);

}
console.log(printAll(circle));
console.log(printAll(employee));