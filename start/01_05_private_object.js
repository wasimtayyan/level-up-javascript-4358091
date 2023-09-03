// Write your code here
// class User {
//   #username
//   #password
//   age
//   constructor(username, passwoed, age) {
//     this.#username = username
//     this.#password = passwoed
//     this.age = age
//   }


// }

// const wasim = new User('wasim', 32342342, 25)
// console.log(wasim.age)
// console.log(wasim.username)
// console.log(wasim.password)

const username = Symbol('username')
const password = Symbol('password')

const User = {
  [username]: 'wasim',
  [password]: '1343442',
  age: 25
}

console.log(User.username)
console.log(User.password)
console.log(User.age)