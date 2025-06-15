//immediately invoked function expression
function chai(){
    console.log("chai peelo");
}
chai();
(function chai(){
    console.log("chai peelo");
})();//remember to put;to avoid errors
//remember if it is asked in an interview what is an iife say global scope ke pollution se kuch problems jo hum face krte hai or jo variable usme declare hote hai unke karan hone 
//pollution se escape krne ke liye we use iife
( ()=>{
    console.log("chai peelo2");
})();
((name)=>{
    console.log(`chai peelo2${name}`);
})('dipti')

//remember to put ; to avoid errors
//if we dont put ; then it will give error