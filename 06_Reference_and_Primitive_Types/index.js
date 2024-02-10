//primitive type: number

let primitiveNum = 20; 
let primitiveNum2 = primitiveNum;

primitiveNum2 = 30; 

console.log(primitiveNum); 
console.log(primitiveNum2); 

//reference type (object, array): object

let object = { value: 40 }; 
let object2 = object; 

object2.value = 50; 

console.log("object", object); 
console.log("object2", object2); 
//this 2 outputs are same: 50, we gonna fix this problem:

let object3 = { value: 60 }; 
let object4 = {...object3}; 

object3.value = 70; 

console.log(object3); 
console.log(object4); 
