//ES6

class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `Encrypted password for ${this.username}`;
    }
    changeusername(){
        return `${this.username.toUpperCase()} `;
        
    }
}




const chai=new user("chai","chai@gmail.com","1234");
console.log(chai.encryptPassword());
console.log(chai.changeusername());

//behind the scenes
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
user.prototype.encryptPassword=function(){
    return `Encrypted password for ${this.username}`;
}