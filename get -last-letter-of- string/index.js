// last letter is equal to target?
function confirmEnding(str, target) {
  const result = str.substr(-target.length) === target

  return console.log(result)
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation","on")
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")