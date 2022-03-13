/* 
** Separate the phrase by space
** return the lagerts word
*/
function findLongestWordLength(str) {
  let word = str.split(' ').reduce((acc, curr) => Math.max(acc, curr.length), 0);

  return console.log(word);
}

findLongestWordLength("One day we will look back and see how good it was to study Javascript");