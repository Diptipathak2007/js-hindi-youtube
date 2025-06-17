//for
// for(let index=0;index<10;index++){
//     const element=index;
//     console.log(element);
//     if(element==5){
//         console.log("Found 5!");
//     }
// }
//console.log(element); // This will throw an error because 'element' is not defined outside the for loop
for (let i = 0; i < 10; i++) {
    //console.log(`outer loop:${i}`)
    for (let j = 0; j < 10; j++) {
        //console.log(`inner loop:${j}`)
        //console.log(i+'*'+j+'='+i*j);

    }
    
}
// let myarray=["first","second","third"];
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

//break and continue
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) {
        console.log("Found 5!");
        break; // Exits the loop when element is 5
    }
    console.log(element);
    
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) {
        console.log("Found 5!");
        continue; // Skips the rest of the loop iteration when element is 5
    }
    console.log(element);
    
}