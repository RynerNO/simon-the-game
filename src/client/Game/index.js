const Game = class SimonTheGame {
  constructor(squares) {
    this.squares = squares
    this.round = 0
  }
  _getRandomInt() {
      let min = 0 
      let max = 3
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  _getRandomOrder() {
    const quantity = this.round + 2
    const order = []
    while (quantity > 0) {
      order.push(this._getRandomInt())
      quantity--
    }
    return order
  }
  _playSound(sound) {
    const audio = new Audio(sound)
    audio.play()
  }
  play() {
    const order = this._getRandomOrder()
    
  }
}


export default Game