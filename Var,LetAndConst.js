//Example1 var hoisting(Var variable accessed before their declaration)
 var num;
console.log(num);//undefined
 num=2; //hoisted to the top
 console.log(num)
//Example2 scope of var variable(function scope)
function getMarks(marks){
    if(marks>70){
        var bonus=10;
        console.log(marks+bonus)
    }
    console.log(bonus);
}
getMarks(78)
//Example 3 declare var varible outside the function
var greeter = "hey hi"; // greeter is global scoped
    
    function newFunction() {
        var hello = "hello"; 
        console.log(hello)
    }
    newFunction();
   // console.log(hello) // get error,hello is function scope
    console.log(greeter)
//Exmaple 4 redeclaring varible with var
var a = 5;
console.log(a); // 5
{
    var a = 3;
    console.log(a); // 3
}
console.log(a); // 3

//Example with Let 
for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

//console.log("Outside the loop:", i);

//Redeclaring Variables in different blocks
let x=77;
{
	let x=23;
	console.log(x);
}
console.log(x);
//Redeclaring Variables in same blocks
let y =77;
{
	let y=23; // legal
	console.log(y);
}
//let y =67;// illegal
console.log(y);

//Example 7 declaration of const variable
	const b = 12;
	//b = 13;
	//b += 1;
    console.log(b)
//Example 8 const is block scope

	const z = 22;
	{
		const x = 90;
		console.log(x);

		{
			const x = 77;
			console.log(x);
		}
		{
			const x = 45;
			console.log(x);
		}
	}
	console.log(z);
//Example 9  It describes that the array values can be modified only reference to array cannot be change

// Changing the content of array is
// possible in cost array
const arr1 = ["pankaj", "sumit", "chandan", "ajay"];

console.log(arr1.toString());

arr1[2] = "Narayan"; // possible

console.log(arr1.toString());

//Example 10  It describes that the object properties can be modified only reference to object cannot be changed
const person = {
    first_name: "Pankaj",
    last_name: "Singh",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};

console.log(person);

// It is possible
person.first_name = "Aryan";
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";

console.log(person);

//  not possible
// const person={
//	 "first_name":"Aryan",
//	 "last_name":"Yadav",
//	 "Age":22,
//	 "About":"Commerce undergraduate"
// }





					

