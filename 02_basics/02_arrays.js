const marvelheroes=["thor","ironman"];
const dc=["batman","superman"];
//marvelheroes.push(dc);
// console.log(marvelheroes);
// console.log(marvelheroes[2][0]);
// const allheroes=marvelheroes.concat(dc);
// console.log(allheroes);
//here we can understand that concats returns a new array  or you can say the operations are performed on the copy of the array whereas push modifies the original array

const  allheroes=[...marvelheroes,...dc];
console.log(allheroes);
//using spread operator to merge two arrays

const anotherarray=[,2,3,[4,5,6],7,[6,7,[4,5]]];
const realanotherarray=anotherarray.flat(Infinity);
console.log(realanotherarray);
//flat method is used to flatten the array 
console.log(Array.isArray("hitesh"));//false
console.log(Array.from("hitesh"));//false
console.log(Array.from({name:"hitesh"}))//interesting
//returns empty array because the object is not iterable
//Array.from is used to create an array from an iterable object

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


