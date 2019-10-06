
const carPooling = (trips, capacity) => {
  let currentMile = 0
  let endMile = 0
  trips.forEach(trip => {
    if (trip[2] > endMile) {
      endMile = trip[2]
    }
  })
  console.log(endMile)
  
  for (let i = currentMile; i < endMile; i++) {
    let currentPassengers = 0

    for (let j = 0; j < trips.length; j++) {
      if (i >= trips[j][1] && i < trips[j][2]) {
        currentPassengers += trips[j][0]
      }
    }
    console.log(`${i}`)
    console.log(`${currentPassengers} passengers`)
    if (currentPassengers > capacity) {
      console.log('OVERLOADED!')
      return false;
    }
  }
  return true;

}

// carPooling([[2,1,5],[3,3,7]], 4)

// carPooling([[2,1,5],[3,3,7]], 5)

// carPooling([[2,1,5],[3,5,7]], 3)

// carPooling([[3,2,7],[3,7,9],[8,3,9]], 11)

carPooling([[3,3,5],[4,5,6],[1,2,7],[3,2,8],[10,5,9],[2,5,9],[1,2,5]], 19)
