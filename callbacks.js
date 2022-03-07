
function firstFunction(callback) {
    console.log(`first function`)
    callback();
}
function secondFunction(callback) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => console.log(`Second function,`, json.name))
        .then(()=> callback());
}
function thirdFunction() {
    console.log(`Third function`)
}

firstFunction(function(){
    secondFunction(function(){
        thirdFunction();
    })
})

