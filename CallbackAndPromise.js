//Example 1
// function step1(value,callback){
//     callback(value+10,false);
//   }
  
//   function step2(value,callback){
//     callback(value+10,false);
//   }
  
//   function step3(value,callback){
//     callback(value+10,false);
//   }
  
//   step1(10,function(result1,error){
//     if(!error){
//       step2(result1,function(result2,error){
//         if(!error){
//           step3(result2,function(result3,error){
//             if(!error){
//               console.log("Result -- > ", result3);
//             }
//           })
//         }
//       })
//     }
//   })

  //Using Promise
  const step1 = (value,err)=>{
    return new Promise((resolve,reject)=>{
     if(!err){
        resolve( value+10);
     }
     else{
        reject("Promise rejected")
     }
    })
  
  }
 
  const step2=(value,err)=>{
    return new Promise((resolve,reject)=>{
     if(!err){
        resolve( value+10);
     }
     else{
        reject("Promise rejected")
     }
    }) 
  }
  const step3=(value,err)=>{
    return new Promise((resolve,reject)=>{
     if(!err){
        resolve( value+10);
     }
     else{
        reject("Promise rejected")
     }
    }) 
  }
  //  step1(10,false)
  //  .then(result1=>step2(result1,false))
  //  .then(result2=>step3(result2,false))
  //  .then(result3=>console.log("Result is:",result3))
  //  .catch(err=>console.log(err))
 //Using aync/await
   async function result(){
    try{
      let result1=await step1(10,false);
      let result2=await step2(result1,false);
      let result3=await step3(result2,false);
      console.log("Result is:",result3);
    }
    catch(err){
      console.log(err);
    }
   }
   result();

   //Example 2

  