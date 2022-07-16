//Example 1 pass two parameters
let sum=(a,b)=>a+b;
console.log(sum(2,3));

//Example 2 with one parameter
let display=n=>n*2;
console.log(display(2));

//Example 3 with no parameter
 const hello=()=>"Hello";
 console.log(hello());

 //Example 4 arrow with rest parameter
 const nums=(first,...rest)=>rest;
 console.log(nums(1,2,3,4));

 //Example 5 call back function with setTimeout
 function orderPizza(type, name, callback) {
    console.log('Pizza ordered...');
    console.log('Pizza is for preparation');
    setTimeout(function () {
        let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
        callback(msg);
    }, 3000);
}
orderPizza("Veg","chesee Barbeque",function(msg){
console.log(msg);
});

//Example 6 Callback synchronous
function doSomething(then) {
    console.log('call first');
    then();
}
// call first, then execute callback to log 'done'
doSomething(function () {
    console.log('Done');
});
console.log('call second');

//Example 7 Callback asynchronously without arrow function example
[1, 2, 3, 4, 5].forEach(function (x) {
    console.log(x);
})

//Example 8 Callback asynchronously with arrow function example
{
[1, 2, 3, 4, 5].forEach(y => console.log(y));
}


