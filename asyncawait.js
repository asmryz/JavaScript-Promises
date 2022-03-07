
function firstFunction() {
    console.log(`first function`)
}

async function secondFunction(callback) {
    await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => console.log(`second function,`, json.name))
}

function thirdFunction() {
    console.log(`third function`);
}

(async () => {
    firstFunction();
    await secondFunction();
    thirdFunction();
})()
