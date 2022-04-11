/*
 * @Author: your name
 * @Date: 2022-04-11 14:15:18
 * @LastEditTime: 2022-04-11 14:23:57
 * @Description: In User Settings Edit
 * @FilePath: \Code-Debug\Js\for-try.js
 */
/**
 * @description:   try Catch && await then catch
 * @param {*}
 * @return {*}
 */



async function test(){    
    for(let i=0; i < 2; i++){     
        // KEEP IT IN SYNC
        await A().then(async res => {
            console.log('--1');
            console.log(res);
            
            await B().then(res => {
                console.log('--2');
            })     

        }).catch(err =>{
            console.log('err:' + err);
        })  
    }
    console.log('Finish')    
};
 
function A(){
   return new Promise(function(resolve, reject){
       try {
            // setTimeout(()=>{
            //     console.log('Run A')
            //     resolve(true);
            // },1000)
            throw 'test Error!!!!'           
       } catch (error) {
           console.log('errA:' + error);
           reject(error)   //if without reject, the job will stop. reject let the for loop continue and throw Err        
       }
   		
   })
}
 
function B(){
   return new Promise(function(resolve, reject){
   		setTimeout(()=>{
            console.log('Run B')
            resolve(true);
        },1000)
   })
}
 
test();