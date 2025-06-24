const descriptor=Object.getOwnPropertyDescriptor(Math, 'PI'); // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
console.log(Math.PI); // 3.141592653589793
console.log(descriptor);

const chai={
    name: 'chai',
    price:'250',
    isavailable: true,

    orderchai: function() {
        console.log(`Order placed for ${this.name}`);
    }
}
console.log(chai); // { name: 'chai', price: '250', isavailable: true }
// console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // { value: 'chai', writable: true, enumerable: true, configurable: true }
// Object.defineProperty(chai,'name',{
//     enumerable: false,
//     writable: false,
// }) 
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key,value] of Object.entries(chai)) {// Object.entries returns an array of key-value pairs as the object is not  iteratable hence this method is preffered
    if(typeof value!='function'){
        console.log(`${key} : ${value}`);
    }
    


}
