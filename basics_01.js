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
// let id=Symbol("123");
// let anotherId=Symbol("123");
// console.log(id===anotherId); //false
// const bigNumber=BigInt(12345678901234567890);
// console.log(bigNumber);


// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.


//Reference(non_primitive) Data Types
//Array,Objects,Functions
//The datatype of non primitive datatypes is object




//*********************************** */
//Stack used by (Primitive Data Types) and Heap (Reference OR NON primitive Data Types)



//*********************************** */
//Strings
// const myName="Safi   ";
// console.log(myName.__proto__);
// console.log(myName.toUpperCase());
// console.log(myName.charAt("1")); 
// console.log(myName.indexOf("i")); 
// console.log(myName.trim()); 
// console.log(myName.replace("Safi","Safiullah")); 
// console.log(myName.includes("fi")); 
//last watch :2.30
// ****************Number and Maths*********************
// const score=400;
// console.log(score)
// const balance=new Number(100);
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// const secondNumber=new Number(12.3656);
// console.log(secondNumber.toPrecision(3))
// const hundreds=100000;
// console.log(hundreds.toLocaleString('en-IN'))
// ****************Maths*********************
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.9))
// console.log(Math.floor(4.2))
// console.log(Math.random())
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)
// const min=10;
// const max=20;
// console.log(Math.floor(Math.random()*(max-min+1)+min))
// ****************Dates*********************
// const now=new Date();
// console.log(now.toString())
// console.log(now.toDateString())
// console.log(now.toLocaleString())
// console.log(now.toISOString())
// console.log(now.toJSON())
// console.log(now.toLocaleDateString())
// console.log(typeof now)
// const myCreatedDate=new Date(2024,1,12);
// console.log(myCreatedDate.toDateString())
// const myCreatedDate2=new Date(2024,1,12,5,10);
// console.log(myCreatedDate2.toLocaleString())
// const myCreatedDate2=new Date("01-14-2024");
// // console.log(myCreatedDate2.toLocaleString())
// let myNewStamp=Date.now();
// console.log(myNewStamp)
// console.log(myCreatedDate2.getTime())
// const newDate=new Date();
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
