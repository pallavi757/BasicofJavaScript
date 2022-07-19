//Example 1 callback function
// function printString(){
//     console.log("Tom"); 
//     setTimeout(() =>  { console.log("Jacob"); }, 300); 
//    console.log("Mark")
//  }
//  printString();

 // Using Promise
//  const myFirstPromise = new Promise((resolve, reject) => { 
//     const condition = true;   
//     if(condition) {
//          setTimeout(function(){
//              resolve("Promise is resolved!"); // fulfilled
//         }, 300);
//     } else {    
//         reject('Promise is rejected!');  
//     }
// });
// const demoPromise= function() {
//     myFirstPromise
//     .then((successMsg) => {
//         console.log("Message:" + successMsg);
//     })
//     .catch((errorMsg) => { 
//         console.log("Error:" + errorMsg);
//     })
//   } 
 // demoPromise();

  //Using Chaning(create another promise)
  const value="Hello";
  const helloPromise  = (value,err)=> {
    return new Promise((resolve, reject)=> {
     // var result = "Hii";
      if(!err){
      resolve(value);
      //console.log(result)
      }
      else{
        reject("Promise rejected");
      }
    })
  }
  const demoPromise  = (value,err) =>{
    return new Promise((resolve, reject)=> {
     // var result = "How are you!";
      if(!err){
      resolve(value +="!How are you!");
      //console.log(message)
      }
      else{
        reject("Promise is rejected");
      }
    })
  }
//   const demoPromise= function() {
//     myFirstPromise
//     .then(helloPromise)
//     .then((successMsg) => {
//         console.log("Success:" + successMsg);
//     })
//     .catch((errorMsg) => { 
//         console.log("Error:" + errorMsg);
//     })
//   } 
//   demoPromise();

  //Using Async/await
  async function msg() {
    try {
      let result  = await helloPromise(value,false);
      let result1 = await demoPromise(result,false);
      console.log("Message:",result1);
  
    }catch(err){ 
        console.log(err);
    }
  } 
  // finally, call our async function
  msg();
  
  //Example2 Using callback
  // function addString(previous, current, callback){
  //   // setTimeout(
  //   //   () => {
  //   //     callback((previous + ' ' + current))
  //   //   }, 
  //   //  ( Math.floor(Math.random() * 100) + 1)
  //   // )
  // }
  // function addAll(){
  //   addString('', 'A', result => {
  //     addString(result, 'B', result => {
  //       addString(result, 'C', result => {
  //        console.log(result) // Prints out " A B C"
  //       })
  //     })
  //   })
  // }
  // addAll();
  // //Using Promise
  // function addString(previous, current){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(
  //       () => {
  //         resolve(previous + ' ' + current)
  //       }, 
  //       Math.floor(Math.random() * 100) + 1
  //     )
  //   })
  // }
//   function addAll(){  
//     addString('', 'A')
//     .then(result => addString(result, 'B'))
//     .then(result => addString(result, 'C'))
//     .then(result => {
//       console.log(result) // Prints out " A B C"
//     })
//   }
  // addAll();
  // //Using async await
  // async function addAll(){
  //   let toPrint = await addString('', 'A')
  //   toPrint = await addString(toPrint, 'B')
  //   toPrint = await addString(toPrint, 'C')
  //   console.log(toPrint) // Prints out " A B C"
  // }
  // addAll();

  