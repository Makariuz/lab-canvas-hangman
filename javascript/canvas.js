class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = this.pickWord()
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0 , 0, canvas.width, canvas.height);
    alert('test')
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
