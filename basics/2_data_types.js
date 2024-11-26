//alert(3 + 3)  we are using node js ,not browser
console.log("ram") ;console.log(3+3)  // can be used but not good for reading


//“dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

//Number 
let n = 123;
n = 12.345;

/*
Infinity, -Infinity and NaN
alert( 1 / 0 ); // Infinity
alert( "not a number" / 2 ); //NaN
NaN is sticky. Any further mathematical operation on NaN returns NaN
alert( NaN + 1 ); // NaN
So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
*/

//BigInteger
//In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1)  -(2^53-1) for negatives.
//A BigInt value is created by appending n to the end of an integer:

const bigInt = 1234567890123456789012345678901234567890n;

//String
/*Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
*/


//bollean - usual 

/*
The “null” value
The special null value does not belong to any of the types described above.
It forms a separate type of its own which contains only the null value:
let age = null;
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.
The code above states that age is unknown.
*/


/*
The “undefined” value
The special value undefined also stands apart. It makes a type of its own, just like null.
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined:
 let age;
alert(age); // shows "undefined"
Technically, it is possible to explicitly assign undefined to a variable:
 let age = 100;
// change the value to undefined
age = undefined;
alert(age); // "undefined"
…But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.
*/



// symbols -> unique

//object -> collection of diff data types

console.log(typeof(null)); // null is of type object but for undefined it is undefined 




