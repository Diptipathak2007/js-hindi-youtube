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



//********************** operations ********************** 

let value=3
let negvalue=-value
console.log(negvalue);

/*console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2**3);
console.log(2%3);
*/

let str1 = "hello"
let str2 = " world"

let str3=str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
//console.log(true+) wrong but +true will work
//console.log(+"")

let num1,num2,num3
num1=num2=num3=2+2
let gamecounter=100;
gamecounter++
console.log(gamecounter);


//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html