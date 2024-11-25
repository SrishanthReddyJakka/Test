const accountId=98764
let accountEmail="srishanthreddy@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let bankNumber

//accountId=965 // not allowed 

console.log(accountId)

accountEmail="srishanth@gmail.com"
accountPassword="123"
accountCity="hyderabad"

console.table([accountId,accountEmail,accountPassword,accountCity,bankNumber]) // for multiple prints of a variables

/*
prefer not to use var 
because of issue in block and functional scope
*/

/* CONST 
Declares variables whose values cannot be reassigned (immutable binding).
Block Scope: Variables are limited to the block in which they are defined (enclosed by {}).
The content of objects or arrays declared with const can be modified, but the reference cannot be changed
example :[  const obj = { name: "John" };
            obj.name = "Doe"; // Allowed
            obj = {}; // Error: Assignment to constant variable ]
Not Hoisted in the same way as var. It is in the "temporal dead zone" until the code execution reaches the declaration.            
*/


/* LET
Declares variables that can be reassigned.
Block Scope: Variables are only accessible within the block where they are defined
example: [{
  let y = 20;
  console.log(y); // 20
}
console.log(y); // Error: y is not defined
]
Temporal Dead Zone: Similar to const, let is hoisted but cannot be accessed before declaration.
*/

/* VAR 
The old way to declare variables in JavaScript
Variables can be reassigned and redeclared within the same scope.
Function Scope: Variables are scoped to the entire function in which they are defined, or globally if defined outside any function.
example:[function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (var is function-scoped)
}
test();]
*/





