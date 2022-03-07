const getNumber = (num)=>{
    return new Promise((resolve, reject)=>{
        if(num > 0 ){
            resolve(num)
        }else{
            reject(`Negative number are not allowed`)
        }
    })
}

const isEven = (num) => {
    return new Promise((resolve, reject)=>{
        if((num % 2) === 0 ){
            resolve(num * 2)
        }else{
            reject(`Odd number are not allowed`)
        }
    })
}

// getNumber(6)
//     .then(num => isEven(num))
//     .then(m => console.log(`${m/2} x 2 = ${m}`))
//     .catch(err => console.log(err))

(async ()=>{
    try {
        let num = await getNumber(-4)
        console.log(await isEven(num));
    } catch (error) {
        console.log(error)        
    }
})();