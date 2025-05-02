// console.log(2>1); // true
// console.log(2>=1); // true
// console.log(2<1); // false
// console.log(2<=1); // false
// console.log(2==1); // false
// console.log(2!=1); // true

console.log("2">1);
console.log("02">1);

// always compare the same type typescipt will never allow you to compare different types

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

// === strict check that makes sure that the types are the same not just the values
console.log(2==="2"); // false
console.log(2=="2"); // true

//in most pf the cases we avoid this type of comparison cauz code cleanliness should be a priority