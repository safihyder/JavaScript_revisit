// let score="sfsf";
// // console.log(typeof score)
// //conversion from number to string
// // let scoreAsString=String(score);
// // console.log(typeof scoreAsString); 
// // the value if it is the not number and ,we convert it in number then it will return NaN and type will show number
// let scoreAsString=Number(score);
// console.log(typeof scoreAsString); 
// console.log(scoreAsString); 
////////////////////OPERATIONS////////////////////////
// let value=3
// let negValue=-value;
// console.log(negValue);

// let value1="safi"
// let value2=" Hyder"
// let value3=value1+value2;
// console.log(value3);
////Primitive Data Types
//7 types of primitive data types
//String ,Number ,Boolean ,Null ,Undefined ,Symbol ,BigInt

//Symbol and BigInt are relatively new data types in JavaScript. They were introduced in ECMAScript 2015 (ES6). The Symbol data type is used to create unique identifiers for objects, while BigInt is used to represent integers that are larger than the maximum number that can be represented by the Number data type.
let id=Symbol("123");
let anotherId=Symbol("123");
console.log(id===anotherId); //false
const bigNumber=BigInt(12345678901234567890);
console.log(bigNumber);


// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.


//Reference(non_primitive) Data Types
//Array,Objects,Functions
//The datatype of non primitive datatypes is object
