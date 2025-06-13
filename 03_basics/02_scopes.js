// let a =10;
// const b=20;
// var c=30;

if(true){
    let a = 40; // This 'a' is block-scoped
    const b = 50; // This 'b' is block-scoped
    var c = 60; // This 'c' is function-scoped (or globally scoped if not in a function)
}
// console.log(a); 
// console.log(b); 
// console.log(c); // 30

//var is not preffered to get escaped from a lot of programming bugs
//normal console through scope is diff and from the node global scope is diff

console.log("***********************************");

function one(){
    const username="dipti";
    function two(){
        const website="youtube";
        console.log(username); // Accessing 'username' from outer function
        
    }
    //console.log(website); 
    two();
}
one(); // This will log "dipti" and then throw an error for 'website' since it's not defined in this scope

if(true){
    const username = "dipti";
    if(true){
        const website = "youtube";
        console.log(username+website); 
    }
    console.log(username); // Accessing 'username' from outer block
    console.log(website); // This will throw an error since 'website' is not defined in this scope
}
console.log(username); // This will throw an error since 'username' is not defined in this scope

console.log("***********************************");
function addone(num){
    return num+1;
}
addone(5); // This will return 6
const addtwo = function(num){
    return num+2;
}
addtwo(5); // This will return 7