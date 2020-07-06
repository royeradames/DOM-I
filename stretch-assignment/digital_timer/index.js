/*
## Project Description
 You will be making a timer that:
  * Counts up to 10 seconds
  * Increments every 10 ms
  * Has digits change to red when it gets to 10 seconds
  * Should not count past 10 seconds
*/

let rootCount = 0;
let count100ms = 0;
let countSecs = 0; 
const runScriptEvery10Seconds = 10;

setInterval( () =>{
    rootCount += 10;

    if(rootCount < 100){
        //display 10ms

    }else if(rootCount > 99){
        //display 100ms
        rootCount = 0;
        count100ms++;

    }else if(count100ms < 100 ){
        
        count100ms = 0;
        countSecs++;

    }else if(countSecs >= 10){
        //stop counting
        //change digits color to red
        clearInterval();

    }
}, runScriptEvery10Seconds);

//components
function ms10(){

}

function ms100(){

}

function seconds(){

}

// //counter promise
// const counter = () =>{
//     //count in sets of 10ms and store it in counting Number
//     return new Promise((resolve, reject) =>{
//         resolve(rootCount());
//     })
// }

// counter()
// .then((currentTime) => {
//     //add components here
//     console.log(currentTime)
    
// })



// //components
// function clock(currentTimeInMS){

// }

// function rootCount (){
//     window.setInterval(() => {
//         countingNum += 10;
//       }, 10)
// }
