//DESTRUCTING

//Array example

const colors = ["red", "blue", "green"]; 

const [firstColor, secondColor, thirdColor] = colors;  // we get firstColor from colors array 
 
console.log(firstColor);   //output: red 
console.log(secondColor);   //output: blue
console.log(thirdColor);    //output: green 


//Object example 

const person = {
    name: "Selman",
    age: 22,
    location: "Turkey"
};

const newPerson = {  //get all attributes 
    ...person
};

const { name } = person;   //get selected attribute 

const person2 = {
    ...name,
    age: 22,
    location: "Turkey"
}; 

console.log(newPerson); 
console.log(name);
console.log(person2);    //output of person2: 
/*
    "0": "S",
    "1": "e",
    "2": "l",
    "3": "m",
    "4": "a",
    "5": "n",
    "age": 22,
    "location": "Turkey"
*/ 
