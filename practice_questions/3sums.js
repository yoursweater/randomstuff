const difference = (a,b) => {
  return Math.abs(a - b)
}

var threeSumClosest = function(nums, target) {

  let closest = nums[0] + nums[1] + nums[2]
  let closestCombo = [nums[0], nums[1], nums[2]]
  console.log(closest)

  for (let i = 0; i < nums.length; i++) {
    let current1 = nums[i]
    let current2
    let current3
    for (let j = i + 1; j < nums.length; j++) {
      current2 = nums[j]
      for (let k = j + 1; k < nums.length; k++) {
        current3 = nums[k]
        // console.log(current1, current2, current3)
        let sum = current1 + current2 + current3
        // console.log(sum)
        if (sum === target) {
          // console.log(current1, current2, current3)
          // console.log('dingus')
          return sum
        } else {
          // console.log('hey')
          let currentDif = difference(target, closest)
          // console.log(currentDif)
          // console.log(sum)
          let tempDif = difference(sum)
          // console.log(sum)
          // console.log(tempDif)
          if (tempDif < currentDif) {
            closest = tempDif
            closestCombo = [current1, current2, current3]
          }
          
        }
      }
    }
  }
  console.log(closest)
  return closest
    
};

threeSumClosest([1,1,1,0], -100);