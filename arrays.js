//Arrays
// Shallow copy:
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent

//DeepCopy:
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.
// const myArr=[1,2,3,4,5];
// console.log(myArr[0]); 
//Array Methods
// myArr.push(6);
// myArr.pop();
// myArr.unshift(-1);
// myArr.shift();
// console.log(myArr.includes(6));
// console.log(myArr.indexOf(4));
// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log("A :",myArr)
// console.log("B :",myArr.slice(1,3))
// console.log("A :",myArr)
// const myArr2=myArr.splice(1,3);
// console.log("C :",myArr2)
// console.log("D :",myArr)
// Concatanation
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// // const arr3=arr1.concat(arr2);
// // console.log(arr3);
// const arr3=[...arr1,...arr2];
// console.log(arr3)
// const nestedArray=[1,23,,34,,45,[1,2,3,4,5,[1,2,3,4,5,6,7,8,9,10]]];
// const flat_Array=nestedArray.flat(Infinity);
// console.log(flat_Array);
// console.log(Array.isArray("Safi"));
// console.log(Array.from("Safi"));
// console.log(Array.from({name:"Safi"})); //Interesting
// let val1=23;
// let val2=34;
// let val3=45;
// console.log(Array.of(val1,val2,val3));

