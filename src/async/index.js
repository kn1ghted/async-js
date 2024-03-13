const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Promise resolved after 5 seconds'), 5000)
            : reject (new Error('Error!'));
    });
}

const anotherFunction = async() => {
    const something = await asyncFunction();
    console.log(something);
    console.log('Asyncronous process done...')
}

console.log('Starting...');
anotherFunction();
console.log('After function call...');