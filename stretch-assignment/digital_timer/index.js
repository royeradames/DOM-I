/*
## Project Description
 You will be making a timer that:
  * Counts up to 10 seconds
  * Increments every 10 ms
  * Has digits change to red when it gets to 10 seconds
  * Should not count past 10 seconds
*/

let rootCount = 0;
let count100ms = 90;
let countOne = 9; 
const runScriptEvery10Seconds = 10;

const intervalID = setInterval( () =>{
    
    rootCount+= 10;

    if(rootCount < 100){
        //display 10ms
        displaymsTens(rootCount)
    }
    if(rootCount >= 100){
        //reset rootCount every 100 and add 1 to count100ms
        rootCount = 0;
        count100ms++;
        displayMsHundreds(count100ms)
    }
    if(count100ms >= 100 ){
        //display 100ms
        count100ms = 0;
        countOne++;
        displaySecondOnes(countOne)
    } 
    //seconds
    if(countOne >= 10){
        //stop counting
        //change digits color to red
        clearInterval(intervalID);
        displaySecondTens();
    }
}, runScriptEvery10Seconds);

//components
function displaymsTens(currentTime){
    const msTens = document.querySelector('#msTens');
    msTens.textContent = currentTime;
}

function displayMsHundreds(currentTime){
    //add 0 when there is only 1 digit
    if(currentTime < 10){
        currentTime = `0${currentTime}`
    }
    const msHundreds = document.querySelector('#msHundreds');
    msHundreds.textContent = `${currentTime}.`;
}

function displaySecondOnes(currentTime){
    const secondOnes = document.querySelector('#secondOnes');
    secondOnes.textContent = `${currentTime}`;
}
function displaySecondTens(){
    //set clock to 10 secs
    const msTens = document.querySelector('#msTens');
    msTens.textContent = `00`;
    const msHundreds = document.querySelector('#msHundreds');
    msHundreds.textContent = `00.`;
    const secondOnes = document.querySelector('#secondOnes');
    secondOnes.textContent = `0`;
    const secondTens = document.querySelector('#secondTens');
    secondTens.textContent = `1`;
    const digits =document.querySelector('.digits');
    digits.style.color = `red`;
}