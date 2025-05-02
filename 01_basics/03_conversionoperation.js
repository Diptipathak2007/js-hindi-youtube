let score ="33abc"
console.log(typeof(score));
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

//33=>33
//33abc=>NaN
//null=>0
//undefined=>NaN
//true=>1
//false=>0

let isloggedIn = 1;
let booleanisLoggedIn = Boolean(isloggedIn)
console.log(booleanisLoggedIn)

//1=>true
//0=>false
//NaN=>false
//"abc"=>true
//""=>false
let somenumber = 33
let stringNumber = String(somenumber)
console.log(typeof stringNumber);