//Example 1 function with no parameter
function displayMessage(){
    console.log("HelloWorld")
}
displayMessage();
//Example 2 function with one parameter
function findSquare(num){
    return num*num;
}
console.log(findSquare(2))
console.log(findSquare(11))
console.log(findSquare(4))
//Example 3 function with pass two parameter
function rectangleArea(a,b){
    return `The area of rectangle is ${a*b}`;
}
console.log(rectangleArea(2,3))
console.log(rectangleArea(2,4))
