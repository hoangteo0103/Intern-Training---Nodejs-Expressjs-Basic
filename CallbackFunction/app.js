//Basic example 

var sum = (a,b ) => {return a+b} ;

function total (a , b, cb) 
{
    const c = 10 ;
    return 10 + cb(a , b); 
}

console.log(total(3,5 , sum));

// // Callback function in async

// fs = require('fs') ; 

// function readFileHandle(err ,data)
// {
//     if(err) {
//         console.log("ERROR") ;
//         return ; 
//     }
//     console.log(data);
// }

// fs.readFile("..." , readFileHandle);
// fs.readFile("..." , (err , data ) => {
//     if(err) {
//         console.log("ERROR") ;
//         return ; 
//     }
//     console.log(data);
// })