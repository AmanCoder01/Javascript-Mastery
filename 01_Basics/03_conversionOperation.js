let score = "33abc"
// console.log(typeof score); //string
// console.log(typeof (score)); //string

let valueInNumber = Number(score);
// console.log("value in number: ", valueInNumber)  //  NaN
// console.log(typeof valueInNumber); //number ...|| score=null then type->number



let isLoggedIn = 1
let booleanNumb = Boolean(isLoggedIn)
// console.log(booleanNumb); //true

// "" -> false
// "man" -> true



let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //33
// console.log(typeof stringNumber); //string





// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);



let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
//  console.log(str3);  // hello hitesh

// console.log("1" + 2); //12
// console.log(1 + "2");  //12
//  console.log("1" + 2 + 2); //122
//  console.log(1 + 2 + "2"); //32

//  console.log( (3 + 4) * 5 % 3); 

//  console.log(+true); //1
//  console.log(+""); //0



let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion