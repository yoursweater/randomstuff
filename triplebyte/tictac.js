
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class TicTacToeBoard {

  constructor() {
    this.board = [
                  ['-', '-', '-'],
                  ['-','-', '-'],
                  ['-','-', '-']
                 ]

    this.currentToken = 'X'
  }

  addToken(x, y, game) {
    // console.log(this.board)
    this.board[x][y] = this.currentToken
    if (this.currentToken === 'X') {
      this.currentToken = 'O'
    } else {
      this.currentToken = 'X'
    }
    // console.log(game)
    if (game) {
      this.aiMove()
      this.printBoard()
    }
  }

  printBoard() {
    for (let i = 0; i < this.board.length; i++) {
      let myLine = `${this.board[i][0]}|${this.board[i][1]}|${this.board[i][2]}`
      console.log(myLine)
    }
  }

  checkFull() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === '-') {
          // console.log('OH NOOOOOOOO')
          return false
        }
      }
    }
    // console.log('FULL!!!!!! YAY')
    return true
  }

  aiMove() {
    if (this.checkFull()) {
      throw new Error('AHHH FULL')
    }
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === '-') {
          this.addToken(i, j)
          return
        }
      }
    }
  }

  async playGame(x,y) {
    // let x
    // let y
    // await rl.question('What x input do you want? ', (answer) => {
    //   x = answer    
    //   rl.close();
    // });
    // await rl.question('What y input do you want? ', (answer) => {
    //   y = answer    
    //   rl.close();
    // });
    this.addToken(x, y, 'game')
  }
 
}

let myboard = new TicTacToeBoard()

// myboard.addToken(0,1)
// myboard.aiMove()
// myboard.printBoard()
// myboard.checkFull()
// while (true) {
//   myboard.aiMove()
//   myboard.printBoard()
// }

myboard.playGame(1,1)