//Dates
let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let mycreateddate= new Date(2023,0,23,5,3);
// console.log(mycreateddate.toDateString());
// console.log(mycreateddate.toLocaleString());

let mycreateddate=new Date("2023-01-14");
//console.log(mycreateddate.toDateString());

let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate= new Date();
console.log(newdate.getDate());// 1-31

console.log(newdate.getDay());// 0-6
console.log(newdate.getFullYear());// 1970-9999
console.log(newdate.getMonth());// 0-11
console.log(newdate.getMonth()+1);

console.log(newdate.getHours());// 0-23
console.log(newdate.getMinutes());// 0-59
console.log(newdate.getSeconds());// 0-59
console.log(newdate.getMilliseconds());// 0-999
console.log(newdate.getTime());// 1970-9999
console.log(newdate.getTimezoneOffset());// -720 to 840
console.log(newdate.getUTCDate());//    1-31
console.log(newdate.getUTCDay());// 0-6
console.log(newdate.getUTCFullYear());// 1970-9999

newdate.toLocaleString('Default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    timeZone:'UTC',
})

