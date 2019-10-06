

let arr = [
            [0,0,0],
            [1,0,0],
            [2,0,0]
          ]

const closestEnemies = (arr) => {

  let currentIndex = [1,0]

  let leftMove = (currentIndex) => {
    let newIndex = currentIndex[1] - 1
    if (newIndex < 0) {
      newIndex = currentIndex[1].length - 1
    }
    console.log(newIndex)
  }

  leftMove(arr[currentIndex])
}

closestEnemies(arr)