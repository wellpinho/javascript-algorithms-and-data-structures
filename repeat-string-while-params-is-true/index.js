function repeatStringNumTimes(str, num) {
  let total = [];
  do {
    if (num > 0) {
      num--
    } else {
      return str = ''
    }
    total.push(str)
  } while(num !== 0)
  return console.log(total.toString().split(',').join(''))
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3)
repeatStringNumTimes("abc", -2)