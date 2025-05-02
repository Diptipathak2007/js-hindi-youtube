const accountID = 144553
let accountemail="hitesh@google.com"
var accountpassword="12345"
accountcity="jaipur"
//accountId = 2//not allowed
accountemail = "hc@gmail.com"
accountpassword = "234"
accountcity = "bengaluru"
console.log(accountID);
console.table([accountID,accountemail,accountpassword,accountcity])
let accountstate;
/*
 prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountID,accountemail,accountpassword,accountcity,accountstate])