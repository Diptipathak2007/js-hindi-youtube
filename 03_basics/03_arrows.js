const user={
    username:"dipti",
    price:100,
    welcomemessage: function(){
        console.log(`Welcome ${this.username} to the world of JavaScript`);
        console.log(this);//this refers to the current context, which is the user object
    }

}
// user.welcomemessage();
// user.username="sam";
// user.welcomemessage();

//console.log(this);//this will return a {} in node mode and window in global mode

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai();

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
// }

const chai=()=>{
    let username="hitesh"
    console.log(this.username);
}
//chai();
const addtwo=(num1,num2)=>{
    return num1+num2;

}
console.log(addtwo(10,20));
const addthree=(num1,num2,num3)=> num1+num2+num3;//single line arrow function
console.log(addthree(10,20,30));
const addthree=(num1,num2,num3)=> {return num1+num2+num3};// multi line arrow function//explicit return
const addthree=(num1,num2,num3)=> (num1+num2+num3);//implicit return






