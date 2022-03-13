// Return largest numbers in arrays

function largestOfFour(arr) {
  const biggerNumber = arr.map((item) => {
    return item.reduce((acc, curr) => {
      return curr > acc ? curr : acc
    })
  })

  return console.log(biggerNumber)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
