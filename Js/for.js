/*
 * @Author: your name
 * @Date: 2022-04-11 14:08:04
 * @LastEditTime: 2022-04-11 14:25:00
 * @Description: In User Settings Edit
 * @FilePath: \Code-Debug\Js\for.js
 */
/**
 * @description:  Js 异步 变同步
 * @param {*}
 * @return {*}
 */

async function test(){    
    for(let i=0; i < 3; i++){     
        // KEEP IT IN SYNC
        await A().then(async res => {
            console.log('--1');

            await B().then(res => {
                console.log('--2');
            })                   
        }).catch(err =>{
            console.log(err);
        })  
    }
    console.log('Finish')    
};
 
function A(){
   return new Promise(function(resolve, reject){
   		setTimeout(()=>{
            console.log('Run A')
            resolve(true);
        },1000)
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