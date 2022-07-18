//Example 1
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
  );

  //Example 2
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  myPromise.then(
    result => console.log(result), // doesn't run
    error =>console.log(error) // shows "Error: Whoops!" after 1 second
  );

  //Example 3: Chaining the Promise with then() 
// returns a promise

// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
  
//   // executes when promise is resolved successfully
  
//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

//Example 4 Promise with catch()
// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );
 //Example 5 Promise with finally()
 // returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);

//Example 6
var show = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    show.
        then(function () {
            console.log('Success, You are a GEEK');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });

