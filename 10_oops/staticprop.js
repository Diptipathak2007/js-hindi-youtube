class user{
    constructor(username){
        this.username = username;
        
    }
    logme(){
        console.log(`I am ${this.username}`);  
    }
    static createid(){//static prevents the access of createid to every instance of user
        return 123;
    }
}
const chai=new user("chai");
//console.log(chai.createid());

class teacher extends user{
    constructor(username,email){
        super(username); // Call the parent class constructor
        this.email = email;

    }
}
const iphone=new teacher("iphone","i@phone.com");
console.log(iphone.logme());

