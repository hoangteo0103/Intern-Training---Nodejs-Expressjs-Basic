// Object 

let demoObject = {
    name : "hoang" ,
    age : "19" ,
    gpa : "4.0" ,
    location : "HCM"
}

console.log(Object.entries(demoObject));
// [ 'name', 'hoang' ],
// [ 'age', '19' ],
// [ 'gpa', '4.0' ],
// [ 'location', 'HCM' ]

for(const t in  demoObject) console.log(t) ;
// Key
// name
// age
// gpa
// location

for(const t in demoObject) console.log(demoObject[t]);
// Value
// hoang
// 19
// 4.0
// HCM

// ----------------------------------------------

//Array 

let demoArray = [1 , 3 , 20 , 3 , 123 , 19] ; 


for(const t of demoArray) console.log(t);
// 1
// 3
// 20
// 3
// 123
// 19

for(const t in demoArray) console.log(t); 
// 0
// 1
// 2
// 3
// 4
// 5

for(var i = 0 ;  i < demoArray.length ; i++)
{
    console.log(demoArray[i]);
}

// 1
// 3
// 20
// 3
// 123
// 19
demoArray.forEach((item , key) => {
    console.log(item, key);
})

// 1 0
// 3 1
// 20 2
// 3 3
// 123 4
// 19 5