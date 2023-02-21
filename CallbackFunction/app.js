//Basic example 

function print(num)
{
    console.log(num);
}
function test(a , cb)
{
    cb(a) ; 
}

test(1 , console.log);

test(1 , print) ; 


// Callback function in async

fs = require('fs') ; 

function readFileHandle(err ,data)
{
    if(err) {
        console.log("ERROR") ;
        return ; 
    }
    console.log(data);
}

fs.readFile("..." , readFileHandle);
fs.readFile("..." , (err , data ) => {
    if(err) {
        console.log("ERROR") ;
        return ; 
    }
    console.log(data);
})