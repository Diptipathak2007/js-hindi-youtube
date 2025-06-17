//if

const isuserloggedin = true;
if(2=="2") {
   console.log("User is logged in");
}
if(2==="2") {
   console.log("User is logged in");
}

//<,>,<=,>=,==,!=,===(it checks the type also),!=== condition

const temp=41;
// if(temp<40){
//     console.log("It's a cold day");
// }
// else{
//     console.log("It's a hot day");
// }
// console.log("This will always run");

// const score=200;
// if(score>100){
//    const power ="fly";
//    console.log(`user power is ${power}`);
// }
// console.log(`user power is ${power}`);//will return an error because power is not defined outside the if block

const balance = 2000;
// if(balance>500)console.log("You can buy the product"),
// console.log("You can buy the product 2"),console.log("You can buy the product 3");

// if(balance<500){
//    console.log("less than 500");
// }
// else if(balance<750){
//    console.log("less than 750");
// }
// else if(balance<900){
//    console.log("less than 1000");
// }
// else{
//    console.log("greater than 1000");
// }

const userloggedin =true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail=true;

if(userloggedin && debitcard&& 2==2){//and logical operator
   console.log("You can buy the product");
}
if(loggedinfromemail|| loggedinfromgoogle){//or logical operator
   console.log("You can buy the product from email or google");
}

