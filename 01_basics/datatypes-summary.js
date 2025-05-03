//primitive data types

//7 types:string, number, boolean, null, undefined, symbol, bigint
const score =100;
const scorevalue =100.3;
const isloggedin=true;
const outsidetemp=null;
let useremail;

const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id==anotherid);//false
const bignumber= 34545678876545678765n;


//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//reference or non-primitive data types
//array,objects,functions

const heros=['thor','ironman','spiderman'];
let myobj={
    name:'dipti',
    age:17,
}
const myFunction = function(){
    console.log("hello world");

}
console.log(typeof bignumber);
console.log(typeof outsidetemp);
console.log(typeof scorevalue);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myFunction);
console.log(typeof anotherid);

//link to study 
//https://tc39.es/ecma262/multipage/abstract-operations.html
