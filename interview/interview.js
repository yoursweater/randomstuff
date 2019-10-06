// testing on here because i want to try test cases
// just copied my code from te browser editor


function minimumTime(numOfSubFiles, files) {
  let totalTime = 0
  if (numOfSubFiles <= 1) {
      // if there's only one file, no merging needs to occur
      // hence the time is zero
      console.log(totalTime)
      return totalTime
  }
  // we can achieve the minimum time by merging the smallest files first
  // accordingly, sort the files so that we don't need to
  // search for the "min" file lengths
  let sorted = files.sort((a,b) => a - b)
  // next, we'll merge them until we have our total time.
  let tempArr = files.slice()
  let tempSum
  while (tempArr.length >= 2) {
      tempSum = tempArr[0] + tempArr[1]
      tempArr = tempArr.slice(2)
      tempArr.unshift(tempSum)
      totalTime += tempSum
      console.log(tempArr)
  }
  console.log(totalTime)
  
  //return our answer
  return totalTime
}
// FUNCTION SIGNATURE ENDS

// minimumTime(4, [4,8,6,12])
// minimumTime(0, [])

// minimumTime(5, [5,4,3,2,1])
minimumTime(8, [1, 3, 5, 9 ,12])



// // TESTING OPTIMIZATION

// function optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList) {
//   // we'll do a simple brute force solution first by checking all of
//   // the combinations
//   let currentOptimal = 0;
//   let idPairs = []

//   let sortedForward = forwardRouteList.sort((a, b) => {
//     return a[1] - b[1]
//   })
//   let sortedReturn = returnRouteList.sort((a, b) => {
//     return a[1] - b[1]
//   })

//   console.log(sortedForward)
//   console.log(sortedReturn)
//   // loop through each combination
//   for (let i = 0; i < forwardRouteList.length; i++) {
//       let currentForward = forwardRouteList[i][1]
//       for (let j = 0; j < returnRouteList.length; j++) {
//           let currentReturn = returnRouteList[j][1]
//           // get total distance to see if it is the highest current
//           // without exceeding the max travel distance
//           let totalTravel = currentForward + currentReturn
//           // if it's optimal, set the pair as the response
//           if (totalTravel <= maxTravelDist && totalTravel > currentOptimal) {
//               currentOptimal = totalTravel
//               idPairs = []
//               idPairs.push([forwardRouteList[i][0], returnRouteList[j][0]])
//           } else if (totalTravel <= maxTravelDist && totalTravel === currentOptimal) {
//               currentOptimal = totalTravel
//               idPairs.push([forwardRouteList[i][0], returnRouteList[j][0]])
//           }
//       }
//   }
//   console.log(idPairs)
//   // return our answer
//   return idPairs;
// }

// optimalUtilization(7000, [[1,8000],[2, 4000], [3, 6000]], [[1, 2000], [2,1000]] )