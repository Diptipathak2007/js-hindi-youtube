

console.log("h");

function saymyname(){
   console.log("dipti");
}

//saymyname();

function add(a,b){//a and b are parameters
    console.log(a+b);
}
function add2(a,b){//a and b are parameters
    return(a+b);
    //no code will be executed after return statement
}
add();//output is NaN(not a number)//here arguments are not passed
add(2,3);//output is 5
add(3,"4");//output is 34
add(3,"a");//output is 3a
add(3,null);//output is 3

const result = add(3,5);
console.log(result);//output is undefined

const result2 = add2(3,5);
console.log(result2);//output is 8

function loginusermessage(username){
    if(username === undefined){//if(!username){}
        return "Please enter a username";
    }
    return `Welcome ${username}`;
}
//console.log(loginusermessage("dipti"));
console.log(loginusermessage());//output is Welcome undefined