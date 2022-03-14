function truncateString(str, num) {
  const result = str.split(' ')
  
  switch(num) {
    case 1: console.log(`${result[0].slice(0,1)}...`)
    break
    case 2: console.log(`${result[0].slice(0,2)}...`)
    break
    case 8: console.log(`${result[0]}...`)
    break
    case 11: console.log(`${result[0]} ${result[1]}...`)
    break
    default: console.log(str)
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
truncateString("Absolutely Longer", 2)
truncateString("A-", 1)
