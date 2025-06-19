//const coding=['js','ruby','python','java','cpp'];

// const values=coding.forEach((item)=> {
//     console.log(item);
//     return item;// this return value is ignored by forEach
// });
// console.log(values); // undefined

const mynums=[1,2,3,4,5,6,7,8,9,10];
//const newnums=mynums.filter((num)=>num>4);
//const newnums1=mynums.filter((num)=>{num>4});//[],scope start hpjayega curly braces ke sath isliyo aapko extra return keyword use krna pdega
//console.log(newnums); // [] - this is incorrect, the filter function should return a boolean
const newnums=[];
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num);
    }
})
console.log(newnums); // [5, 6, 7, 8, 9, 10]