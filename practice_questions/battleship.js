


const board = [['x', '.', '.'],
               ['.', '.', 'x'],
               ['.', '.', 'x']]


console.log(board[3])

const countBattleships = (board) => {
  let battleships = 0
  let visited = new Set()
  
  const checkShip = (y, x) => {
    if (visited.has(y.toString() + x.toString())) return;
    visited.add(y.toString() + x.toString())
    let left = 0
    let right = 0
    let top = 0
    let bottom = 0
    let leftcoords, topcoords, bottomcoords, rightcoords

    if (board[y][x - 1]) {
      let temp = board[y][x - 1]
      if (temp === 'x') left = 1;
      leftcoords = [y, x - 1]
    }
    if (board[y - 1]) {
      let temp = board[y - 1][x]
      if (temp === 'x') top = 1;
      topcoords = [y - 1, x]
    }
    if (board[y + 1]) {
      let temp = board[y + 1][x]
      if (temp === 'x') bottom = 1;
      bottomcoords = [y + 1, x]
    }
    if (board[y][x + 1]) {
      let temp = board[y][x + 1]
      if (temp === 'x') right = 1;
      rightcoords = [y, x + 1]
    }
    if (left + top === 2 || left + bottom === 2) throw new Error;
    if (right + top === 2 || right + bottom === 2) throw new Error;

    if (left + right + top + bottom === 0) {
      battleships += 1
      return
    } else if (left + right + top + bottom > 2) {
      console.log('error: invalid board')
      throw new Error
    } else {

      if (left + right + top + bottom === 1) {
        // need to traverse the entire ship in order to count it up
        if (left === 1) {
          if ( visited.has(y.toString() + x.toString()) === false) {
            checkShip(leftcoords[0], leftcoords[1]);
          } else {
            battleships += 1
            return
          }
        }
        if (top === 1 ) {
          if ( visited.has(y.toString() + x.toString()) === false) {
            checkShip(topcoords[0], topcoords[1]);
          } else {
            battleships += 1
            return
          }

        }         
        if (right === 1 ) {
          if ( visited.has(y.toString() + x.toString()) === false) {
            checkShip(rightcoords[0], rightcoords[1]);
          } else {
            battleships += 1
            return
          }
        } 
        if (bottom === 1 ) {
          if ( visited.has(y.toString() + x.toString()) === false) {
            checkShip(bottomcoords[0], bottomcoords[1]);
          } else {
            battleships += 1
            return
          }
        } 

      }

      if (left + right + top + bottom === 2) {
        // if we have traversed into thhe middle of a valid battleship
        // then we should find the one part that's unvisited and go there
        // if (left === 1 && )
      }

    }   

  }


  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      console.log(board[y][x])
      let tile = board[y][x]
      if (!visited.has(y.toString() + x.toString())) {
        if (tile === 'x') {
          checkShip(y, x)
        } else {
          visited.add(y.toString() + x.toString())
        }
      }
    }
  }

  console.log(visited)
  console.log(battleships)
  return battleships
}

countBattleships(board)