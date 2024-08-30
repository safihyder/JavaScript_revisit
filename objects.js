//singleton
//Object.create
//object Literals
// const mysym=Symbol("key1");

// const jsUser={
//     name:"safi",
//     [mysym]:"mySyn1",
//     age:12,
//     location:"India",
//     email:"safihaider@gmail.com"
// }
// console.log(jsUser['name']);
// console.log(jsUser['age']);
// console.log(jsUser[mysym]);
//If we want to freeze an object so that no one can freeze the object
// Object.freeze(jsUser)
// jsUser.name="Safiullah";
// console.log(jsUser['name']);
// jsUser.greetings=function(){
//     console.log("Hello,Welcome");
// }
// // jsUser['greetings']();
// jsUser.greetings();
// jsUser.greetings2=function(){
//     console.log(`Hello,Welcome ${this.name}`);
// }
// // jsUser['greetings']();
// jsUser.greetings2();
// //last watch 4:03
// // const tinderUser=new Object();   //Singleton Object
// const tinderUser={};  //Non Singleton Object
// tinderUser.name="Safi"
// tinderUser.id="safi1233"
// tinderUser.isLoggesIn=true
// console.log(tinderUser);
// const obj1={1:"a",2:"b",3:"c"};
// const obj2={4:"d",5:"e",6:"f"};
// // const newObj=Object.assign({},obj1,obj2);
// const newObj={...obj1,...obj2};
// console.log(newObj);
// const User1=[
//     {
//         name:"Safi",
//         age:12,
//         location:"India",
//         email:"safihaider0987@gmail.com"
//     },
//     {
//         name:"Safiullah",
//         age:22,
//         location:"India",
//         email:"safiullah123@gmail.com"
//     },
// ]
// console.log(User1[1].name);
// console.log(Object.keys(User1[1]));
// console.log(Object.values(User1[1]));
// console.log(Object.entries(User1[1]));
// console.log(User1[1].hasOwnProperty("age"));
const Course={
    instructor:"Hitesh Choudhary",
    courseName:"JavaScript",
    CourseLanguage:"Urdu"
}
// console.log(Course.CourseLanguage);
// const {instructor}=Course;
// console.log(instructor);
const {instructor:Inst}=Course;
console.log(Inst);