
function firstFunction() {
    return new Promise((resolve, reject)=>{
        resolve(`first Function`)
    })
}

function secondFunction() {
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => resolve(`Second function, ${json.name}`))
    })
}

function thirdFunction() {
    return new Promise((resolve, reject)=>{
        resolve(`Third Function`)
    })
}

// firstFunction()
//     .then(data => console.log(data))
//     .then(()=>{
//         secondFunction().then(data => console.log(data))
//         .then(()=> {
//             thirdFunction().then(data => console.log(data))
//         })
//     })

Promise.all([
    firstFunction().then(data => console.log(data)),
    secondFunction().then(data => console.log(data)),
    thirdFunction().then(data => console.log(data)),
])
