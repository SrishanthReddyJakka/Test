let score ="33abc"
console.log(typeof score);

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)
console.log("------------------------------------------------------------------")

//------------------------------
let score1 =null
console.log(typeof score1);

let valueInNumber1=Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1)
console.log("------------------------------------------------------------------")

//--------------------------------
let score2 =undefined
console.log(typeof score2);

let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2)
console.log("------------------------------------------------------------------")

//--------------------------------

/* 
"33"->33
"33abc"->Nan
null-> 0
undefined -> Nan
*/

let isLog=1;
console.log(isLog)
let b=Boolean(isLog)
console.log(b)
console.log("------------------------------------------------------------------")


let isLog1="";
console.log(isLog1)
let b1=Boolean(isLog1)
console.log(b1)
console.log("------------------------------------------------------------------")


let isLog2="ram";
console.log(isLog2)
let b2=Boolean(isLog2)
console.log(b2)
console.log("------------------------------------------------------------------")


/* --------------------- OPERATIONS ----------------------------------- */

let num=3;
let negnum=-num;
console.log(negnum);
console.log("------------------------------------------------------------------")


let name1="ram";
let name2="sri";

let name3=name2+name1;
console.log(name3);
console.log("------------------------------------------------------------------")

console.log("1"+2);
console.log("1"+2+3);// if string first consider all as string
console.log(1+2+"3"); // if num first ,then all the values are consider as num tell thy found it string
console.log(3+1+"4"+5+3);// first num ,once string found then everything is string
console.log("------------------------------------------------------------------")

console.log("2">1)
console.log("02">1)
console.log(null > 0)
console.log(null == 0)
console.log(null >=0)//For >=, it internally evaluates the expression as !(null < 0) (logical negation of null < 0).
console.log(null == undefined); // true
console.log(null == 0);         // false
console.log("------------------------------------------------------------------")



