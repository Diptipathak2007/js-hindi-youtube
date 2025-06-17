//for of
// [" "," "," "]
// [{},{},{}]

// const arr =[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

// const greetings="hello world"
// for(const greet of greetings){
//     console.log(greet);
    
// }

//maps

const map =new Map();
map.set('IN',"INDIA");
map.set('us',"united states of america");
map.set('fr',"france");
map.set('IN',"INDIA");//no readdition
console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);//will return the individual all array hence enclose key in square braces
}

const myobject={
    'game1':'nfs',
    'game2':'spiderman'
}
for (const [key,value] of myobject) {
    console.log(key,':-',value);//myobject is not iterable
}


