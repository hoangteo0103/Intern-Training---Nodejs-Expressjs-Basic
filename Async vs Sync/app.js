// Sync : step by step , top to bottom , left to right 
// Pros : The program will run in the correct order and principle, so there will be no unnecessary process errors
// Cons : will have wait state (pending) and it is unecessary in some situations lead to memory leaking

// Async : can jump over some step .
// Pros : can process multiple job without waiting
// Cons : hard to manage , cannot work in process require order.

// 1 : Asynchoronous function 
const fs = require('fs') ;
const path = require('path') ; 

const data = fs.readFile(path.join(__dirname , "test.json")) ; 
console.log(data) ;  //undefined

// -------------------------------------------------
// 2 : Promise 


let promise = new Promise(function(resolve , reject) {
    setTimeout(() => {
        resolve("ok");
    }, 1000);
}); 

promise.then(result => alert(result) , error => alert(error));
// If we only interested in succesfull completions , then we can provide only one function argument to then .
promise.then(result => alert(result)) ;

// If we only interested in errors , then we can use then(null , erros) or catch(error).
promise.catch(error => alert(error)) ;

// -------------------------------------------------
// 3 : Async Await

// async makes a function return a Promise
// await makes a function wait for a Promise

//The await keyword can only be used inside an async function.
//The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile();