const name="dip-ti-com-ing"
const repocount=7

//console.log(name+repocount+"value");

console.log(`hello my name is ${name}and i have my repo count as ${repocount}`);//string interpolation
const gamename= new String("cricket");
console.log(gamename[0]);
console.log(gamename.__proto__);//__proto__ is used to access the prototype of the object
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("t"));
const newstring=gamename.substring(0,4);//here negative indexes can be passed but it will not work
console.log(newstring);
const anotherstring=gamename.slice(-6,4);//here we can pass negative indexes too
console.log(anotherstring);

const newstringone="    dipti     "
console.log(newstringone);
console.log(newstringone.trim());//it will remove the spaces from the start and end of the string

const url="https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("hitesh","dipti"));//it will not change the original string
console.log(url.includes("hitesh"));//it will return true or false

console.log(name.split("-"));//it will split the string into an array