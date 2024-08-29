//singleton
//Object.create
//object Literals
const mysym=Symbol("key1");

const jsUser={
    name:"safi",
    [mysym]:"mySyn1",
    age:12,
    location:"India",
    email:"safihaider@gmail.com"
}
// console.log(jsUser['name']);
// console.log(jsUser['age']);
// console.log(jsUser[mysym]);
//If we want to freeze an object so that no one can freeze the object
// Object.freeze(jsUser)
// jsUser.name="Safiullah";
// console.log(jsUser['name']);
jsUser.greetings=function(){
    console.log("Hello,Welcome");
}
// jsUser['greetings']();
jsUser.greetings();
jsUser.greetings2=function(){
    console.log(`Hello,Welcome ${this.name}`);
}
// jsUser['greetings']();
jsUser.greetings2();