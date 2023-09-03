// Write your code here
class Book {
  constructor(title, auther, ISBN, numOfCopies) {
    this.title = title
    this.auther = auther
    this.ISBN = ISBN
    this.numOfCopies = numOfCopies
  }
  get Availblty() {
    if (this.numOfCopies === 0) {
      return "Out of stuck"
    } else if (this.numOfCopies < 10) {
      return "Low stuck"
    } else {
      return "In stuck"
    }
  }
  sell(num = 1) {
    this.numOfCopies -= num
  }
  restock(num = 5) {
    this.numOfCopies += num
  }
}

const book = new Book('how to sleep', 'jone dou', 456887, 12)

console.log(book.Availblty)
book.sell()
console.log(book.numOfCopies)
book.sell(8)
console.log(book.Availblty)
book.restock(10)
console.log(book.numOfCopies)
console.log(book.Availblty)