// Basic sum function
function sum(num1, num2) {
    return num1 + num2;
}

// Calculation function using callback
function calc(num1, num2, callback) {
    return callback(num1,num2);
}

console.log(calc(2,3,sum));

// Using set timeout - not exact running time but a minimum
setTimeout(function(){
    console.log('Hi');
}, 2000);

function greetings(name){
    console.log(`Hola ${name}`);
}

setTimeout(greetings, 2000, 'Edwin');