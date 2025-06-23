class user{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`I am ${this.username}`);  
    };
    
}

class teacher extends user{
    constructor(username, subject){
        super(username); // Call the parent class constructor
        this.subject = subject;
    }
    logme(){
        console.log(`I am ${this.username} and I teach ${this.subject}`);
    }
    addcourse(){
        console.log(`${this.username} added a new course`);
    }
}
const chai=new teacher("chai","maths");
chai.addcourse();