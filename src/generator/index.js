// Simple generator function
function* gen (){
    yield 1;
    yield 2;
    yield 3;
}

// Use a generator function to return values
let myGenerator = gen();
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);

// Notice the use of * after function, otherwise the keyword yield will not be available
function* iterateArray(array){
    for (let value of array){
        yield value
    }
}

let countries = ['Costa Rica','Germany','Chile','Japan'];
let iterateCoutries = iterateArray(countries);
console.log(iterateCoutries.next().value);
console.log(iterateCoutries.next().value);
console.log(iterateCoutries.next().value);
console.log(iterateCoutries.next().value);
// Returns undefined as last item in array has no next value
console.log(iterateCoutries.next().value);