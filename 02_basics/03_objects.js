//singleton
//from constructors it alwats returns singleton
//Object.create
//object literals
const mysymbol=Symbol("key1");
const jsuser={
    name:"dipti",
    age:17,
    [mysymbol]:"mykey1",
    location:"jaipur",
    email:"diptipathak019@gmail.com",
    isloggedin:false,
    lastlogindays:["Mon","Tue","Wed"],
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysymbol]);
myarray=['h','i'];

jsuser.email= "hitesh@chatgpt.com"
//Object.freeze(jsuser);
jsuser.email= "hitesh@tyu.com"
console.log(jsuser["email"]);
console.log(jsuser);



jsuser.greeting=function(){
    console.log("Hello js user")
}
console.log(jsuser.greeting());

jsuser.greetingto=function(){
    console.log(`Hello ${this.name}`)
}
console.log(jsuser.greetingto());