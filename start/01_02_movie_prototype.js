// Write your code here
function Movie(title, director, genre, releaseDate, rating) {
  this.title = title
  this.director = director
  this.genre = genre
  this.releaseDate = releaseDate
  this.rating = rating
}
Movie.prototype.GetOverView = function () {
  return `${this.title} a ${this.genre} film dircted by ${this.director} was reelased in ${this.releaseDate} it receved a rating of ${this.rating}`
}

const HangerGame = new Movie('Hanger_Game', 'some one', 'action', 2014, 4.5)

console.log(HangerGame.GetOverView())