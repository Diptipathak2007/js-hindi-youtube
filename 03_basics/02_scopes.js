// let a =10;
// const b=20;
// var c=30;

if(true){
    let a = 40; // This 'a' is block-scoped
    const b = 50; // This 'b' is block-scoped
    var c = 60; // This 'c' is function-scoped (or globally scoped if not in a function)
}
console.log(a); 
console.log(b); 
console.log(c); // 30

//var is not preffered to get escaped from a lot of programming bugs
//normal console through scope is diff and from the node global scope is diff