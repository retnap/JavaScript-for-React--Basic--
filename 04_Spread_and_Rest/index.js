// SPREAD OPERATOR 

//Array example
let numbers = [1,2,3,4]; 

let newNumbers = [...numbers, 5];
let newNumbers2 = [10, ...numbers];

console.log(newNumbers);
console.log(newNumbers2);

//Object Example 
const user = {
    name: "Selman",
    surname: "Kayali"
};

const newUser = {
    ...user,        //newUser got all attiributes from user 
    age: 25
}; 

console.log("New User", newUser);


//REST OPERATOR 
let sum = (...args) => {
   return console.log(args);   //Null array created here 
}

console.log(sum(10, 20, 30, 40));  //Parametres added to null array 


let sum2 = (...args) => {
    return args.reduce((acc, current) => acc + current);  //basic addition operation with reduce func
};

console.log(sum2(10, 20, 30, 40)); 