const promiseone=new Promise(function(resolve,reject){
    //do and async tasks
    //db calls,cryptography,network calls
    setTimeout(function(){
      console.log('Async task one completed');
      resolve();
    },1000);
});

promiseone.then(function(){
    console.log('Promise one resolved');
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two completed');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise two resolved');
})

const Promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"dipti",email:"dipti@example.com"});
    })
},1000)

Promisethree.then(function(user){
    console.log(user);
})

const Promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;//simulate an error if choosen false will return success
        if(!error){
            resolve({username:"hitesh",password:"123456"});
        }
        else{
            reject('Error: Something went wrong');
        }
        
    })
},1000)
Promisefour
.then((user)=>{
    console.log(user);
    return user.username;
    
})
.then((myusername)=>{
     console.log(myusername);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>console.log("finally the promise is either resolved or rejected"))//chaining promises


const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;//false returns success
        if(!error){
            resolve({username:"javascript",password:"123456"});
        }
        else{
            reject('Error: js went wrong');
        }
    },1000)
})

async function consumepromisefive() {
  try {
    const response=await promisefive;//async await can<t directly handle errorsj
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromisefive();


// async function getAllusers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data= await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error fetching users:', error);
//     }
// }
// getAllusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
} )
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('Error fetching users:', error);
})
    

