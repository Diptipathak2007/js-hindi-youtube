const tinder=new Object();//output-{} ,it is a singleton object
const tinderuser={};//output-{},it is a non singleton object
tinder.name="dipti";
tinder.id="123abc";
tinder.isloggedin=false;

console.log(tinder);

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullanme:{
            first:"dipti",
            last:"kumar"
        }

    }
}
//console.log(fullname.userfullanme.first);//output-dipti
console.log(regularuser.fullname.userfullanme.first);//output-dipti

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={obj1,obj2};//output-{obj1: {…}, obj2: {…}} ,it is a nested object
const obj4=Object.assign({},obj1,obj2);//output-{1: "a", 2: "b", 3: "a", 4: "b"} ,it is a shallow copy
const obj5={...obj1,...obj2};//output-{1: "a", 2: "b", 3: "a", 4: "b"} 

const users=[
    {
        id:1,
        name:"dipti",
        
    },
    {},
    {},
]

users[0].name;
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty("name"));//output-true