//array
const myarr=[1,2,3,4,5,6,7,8,9];//elements here can be stored of different data types----arrays in js are resizable
const myheroes=["batman","superman","ironman"];

const myarr2=new Array(23,45,67,89);
console.log(myarr[0]);

//array methods
myarr.push(6);
myarr.pop();
myarr.unshift(9);
myarr.shift();
console.log(myarr.includes(9));
const newarr=myarr.join();
console.log(myarr);
console.log(newarr);
console.log(typeof(newarr));

//slice,splice

console.log("A",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);
const myn2=myarr.splice(1,3);
console.log(myn2);
console.log("C",myarr);
//splice is used to remove elements from the array and slice is used to get a copy of the array

