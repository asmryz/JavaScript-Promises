console.log(`first function--!!`)

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((json) => console.log(`Second function,`, json.name));
  
console.log(`Third function`)

