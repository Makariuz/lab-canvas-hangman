class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();  //not a global function, so since it's inside the class, it is this.etc
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;

  }

  pickWord() {
    // ... your code goes here
    let randomIndex = Math.floor(Math.random()*this.words.length)
    let randomWord = this.words[randomIndex]
    return randomWord

  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    
    if (keyCode > 64 && keyCode < 91) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    let notLetter = !this.letters.includes(letter) 
    if (notLetter){
      return true
    } else {
      //this.letters.push(letter)
      return false 
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here

    //need to add to "guessedLetters"
    this.guessedLetters += letter
    //pass the method to check if the user won
    this.checkWinner()
    
   
  }

  addWrongLetter(letter) {
    // ... your code goes here
    
    if (!this.letters.includes(letter)){
      this.errorsLeft  -= 1
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
        return false
    } else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    //revise why its length
    let rightWord = this.secretWord.length === this.guessedLetters.length
    if (rightWord) {
      return true
    } else {
      return false
    }

    

  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    canvas.createBoard()
    canvas.drawLines()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  //test
  //let x = event.key
  //console.log(x)

});
