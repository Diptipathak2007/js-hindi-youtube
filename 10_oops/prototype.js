let myname="John    ";
console.log(myname.length);// 10
console.log(myname.truelength);//4 true length removes trailing spaces
console.log(myname.trim.length);

let myName="hitesh   ";
let mychannel="chai    ";
//console.log(myname.trim.length);// 6
//console.log(myName.truelength);

let myhero=["thor","spiderman"];
let heropower={
    thor:"hammer",
    spiderman:"web",

    getspiderpower:function(){
        console.log(`Spiderman has ${this.spiderman} power`);
    }
}
heropower.hitesh=function(){
    console.log("hitesh is present in all objects");
}
Array.prototype.heyHitesh=function(){
    console.log("Hitesh is present in all arrays");
}

//myhero.heyHitesh(); // Hitesh is present in all arrays
//myhero.hitesh(); // hitesh is present in all objects
//heropower.hitesh(); // hitesh is present in all objects
//heropower.heyHitesh(); // TypeError: heropower.heyHitesh is not a function

//inheritance

const user={
    name:"hitesh",
    email:"chai@google.com",
}
const Teacher = {
    makevideo:true
}
const teachersupport={
    unavailable:false
}

const Tasupport={
    makeassignment:'js assignment',
    fulltime:true,
    _proto_:Teacher // inheritance
}
Teacher.__proto__=teachersupport; // inheritance
Teacher.__proto__=user; // inheritance

//modern syntax

Object.setPrototypeOf(Teacher, teachersupport); // inheritance

let anotherusername="chaiaurcode            "
String.prototype.truelength=function(){
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherusername.truelength();
