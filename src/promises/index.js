// Example - basic promise
let promise = new Promise(function(resolve, reject){
    resolve('Hey!');
});

// We have a farm that requieres at least 10 cows to produce enough milk
// Idea: to implement a function to count the cows and enable milk production
// using promises

// Total cows on farm
const COWS = 9;

// Promise declaration
let countCows = new Promise(function(resolve, reject){
    if(COWS >= 10) {
        resolve(`Enough cows\(${COWS}\) to start milk production`);
    } else {
        reject(`NOT Enough cows\(${COWS}\) to start milk production`);
    }
});

// Promise execution
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log(`Promise done`);
})