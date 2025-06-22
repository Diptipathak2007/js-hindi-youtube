const user1={
    username: "John",
    logincount: 32,
    signedin:"true",

    getuserdetails:function(){
        //console.log("got user details from database");
        console.log(`Username is ${this.username} and login count is ${this.logincount} and signed in status is ${this.signedin}`);
        console.log(this);
    }
}
const user2={
    username: "dipti",
    logincount: 30,
    signedin:"true",

    getuserdetails:function(){
        //console.log("got user details from database");
        console.log(`Username is ${this.username} and login count is ${this.logincount} and signed in status is ${this.signedin}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getuserdetails());
//console.log(this);

const promiseone=new Promise((resolve, reject) => {
    // You can add logic here to resolve or reject the promise
});
const date=new Date();

function user(Username,logincount,isloggedin){
    this.username=Username;
    this.logincount=logincount;
    this.signedin=isloggedin;

    this.greeting=function(){
        console.log(`Hello ${this.username}, your login count is ${this.logincount} and signed in status is ${this.signedin}`);
    }

   //return this;{implicity it's by default defined in js}
}

const userone= new user("John",32,"true");
const usertwo= new user("Dipti",30,"true");
console.log(userone.constructor);
console.log(usertwo);
