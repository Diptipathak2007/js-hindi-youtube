function setusername(username) {
  this.username = username;
}
function createuser(username,email,password){
    setusername.call(this.username);//this is used to set the context of the function
    this.email = email;
    this.password = password;
}

const chai=new createuser("chai","chai@facebook.com","1234");
console.log(chai);