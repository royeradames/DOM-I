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
let countOne = 0; 
const runScriptEvery10Seconds = 10;

setInterval( () =>{
    
    rootCount+= 10;

    if(rootCount < 100){
        //display 10ms
        ms10(rootCount)
    }
    if(rootCount >= 100){
        //reset rootCount every 100 and add 1 to count100ms
        rootCount = 0;
        count100ms++;
        ms100(count100ms)
    }
    if(count100ms >= 100 ){
        //display 100ms
        count100ms = 0;
        countOne++;
        secondOnes(countOne)
    } 

    //seconds
    if(countOne < 10){
        
    }else{
        //stop counting
        //change digits color to red
        clearInterval();
        secondTens();
    }
}, runScriptEvery10Seconds);

//components
function ms10(currentTime){
    const msTens = document.querySelector('#msTens');
    msTens.textContent = currentTime;
}

function ms100(currentTime){
    const msHundreds = document.querySelector('#msHundreds');
    msHundreds.textContent = `${currentTime}.`;
}

function secondOnes(currentTime){
    //add 0 when there is only 1 digit
    
    
    const msHundreds = document.querySelector('#secondOnes');
    msHundreds.textContent = `${currentTime}`;
}
function secondTens(){
    const msHundreds = document.querySelector('#msHundreds');
    msHundreds.textContent = `0`;
    const secondTens = document.querySelector('#secondTens');
    secondTens.textContent = `1`;
    const digits =document.querySelector('.digits');
    digits.style.color = `red`;
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
