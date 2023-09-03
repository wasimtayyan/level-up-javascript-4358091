// Write your code here
function Totle(array) {

  let sum = array.reduce((acc, cournt) => (acc += cournt))
  const bill = sum * 1.25
  return `the totle bill is ${bill}`
}
console.log(Totle([2, 3, 1, 5]))
