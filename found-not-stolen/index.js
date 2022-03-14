function findElement(arr, func) {
  return console.log(arr.find(func));
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0) // deve retornar 8
findElement([1, 3, 5, 9], (num) => num % 2 === 0) // deve retornar undefined.