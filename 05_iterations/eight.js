const mynums=[1,2,3];

const initialValue = 0;
const sumwithinitialvalue = mynums.reduce((accumulator, currentValue) => {return accumulator + currentValue}, initialValue);
// const mytotal=mynums.reduce(function(acc,currval){
//     return acc+currval;
// },0);
console.log(sumwithinitialvalue); // Output: 6