
let maze = [
            [' ',' ',' ',' '],
            [' ','*','*',' '],
            [' ',' ',' ','*'],
            [' ',' ','*','E']
           ]

const solveMaze = (maze, x, y, memo) => {
  if (memo.has(`${x}${y}`)) {
    return false
  }
  
  memo.add(`${x}${y}`)
  // console.log(memo)

  if (x > 3 || x < 0) return false;
  if (y > 3 || y < 0) return false;
  if (maze[x][y] == '*') return false;
  if (maze[x][y] == 'E') return true;

  let addX = x + 1
  let addY = y + 1
  let minusX = x - 1
  let minusY = y - 1
  if (solveMaze(maze, x, minusY, memo)) return true;
  if (solveMaze(maze, x, addY, memo)) return true;
  if (solveMaze(maze, minusX, y, memo)) return true;
  if (solveMaze(maze, addX, y, memo)) return true;

  return false
}


console.log(solveMaze(maze, 0, 0, memo = new Set()))