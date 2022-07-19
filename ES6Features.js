//Example 1 Deafault parameter
let calculateArea = function(height = 100, width = 50) {  
    return height*width;
}
console.log(calculateArea());

//Example 2
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  console.log (myFunction(5)); 

  //Example 3 MultiLine string
  let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`
console.log(greeting); 

//Example 4  Template Literals
const firstName="Harry"
const lastName="Potter"
let fullName=`My full name is ${firstName} ${lastName}`
console.log(fullName);

//Example 5  Destructuring Assignment(expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.)
// 1) Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);
// 2) Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);

//Example 6 Enhanced Object Literals( easy to quickly create objects with properties inside the curly braces)
function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 console.log(getMobile("Samsung", "Galaxy", "2020"));

 //Example 7 Classes
 class UserProfile {   
    constructor(firstName, lastName) { 
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     getName() {       
      console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
    } 
 }
 let obj = new UserProfile('John', 'Smith');
 obj.getName(); // output: The Full-Name is John Smith

 //Example 8 For/Of Loop
 const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  console.log( text += x + " ");
}
//Looping over a String
let language = "JavaScript";
let text1 = "";
for (let x of language) {
   console.log( text1 += x + " ");
}
//Example 9 JavaScript Maps
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const newFruits = new Map();

// Add new Elements to the Map
newFruits.set(apples, 500);
newFruits.set(bananas, 300);
newFruits.set(oranges, 200);
console.log(newFruits);

//Example 10 Rest Parameter
function sum(...args) {
   let sum = 0;
   for (let arg of args) sum += arg;
   return console.log (sum);
   
 }
 let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

 //Example 11 Clouser
//  function displayName(name){
//    let tech="NodeJS";
//    const printName=()=>{
//       console.log(`${name} is working on ${tech}`);
//    } 
//    printName();
//  }
//  displayName("Robin");

 //Example 12 Higher order function
 function displayName(name){
  // let tech="NodeJS";
   function printName(tech){
      console.log(`${name} is working on ${tech}`);
   } 
  return printName;
 }
 displayName("Robin")("ReactJs");

 //Example 13 lexical scope
 let c=30;
 {
   function test(){6
      var b=20;
      console.log(c,b);
   }
 }
 console.log(b);
 test();
 //Example 14 Hoisting
 e=4;
 console.log(e); //e is used before declaration
 var e;