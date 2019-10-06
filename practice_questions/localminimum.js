// "Find a local minimum"

//this needs work

let arr = [10,9,8,7,6,5,4,3,2,3,4,5,6,7,8,9,10]
let arr2 = [8,7,6,5,4,3,2,1, ]

const findLocalMinimum = (arr) => {
    let guess,
        min = 0
        max = arr.length - 1

    while (min <= max) {
        guess = Math.floor((max - min) / 2)
        // console.log(guess)
        if (arr[guess - 1] > arr[guess] && arr[guess + 1] > arr[guess]) {
            console.log(arr[guess])
            return arr[guess]
        } else if (arr[guess - 1] == arr[guess] && arr[guess + 1] == arr[guess +1]) {
           return arr[guess]
        } else if (arr[guess - 1] < arr[guess] && arr[guess + 1] > arr[guess]) {
            max = guess - 1
        } else if (arr[guess + 1] < arr[guess] && arr[guess - 1] > arr[guess]) {
            min = guess + 1
        } else if (arr[guess] > arr[guess -1] && arr[guess] > arr[guess + 1]) {
            // console.log(guess)
            // let left = arr.splice(0, guess)
            // let right = arr.splice(0, max)
            // console.log(left)
            // console.log(right)
            // findLocalMinimum(left)
            // findLocalMinimum(right)
            return - 1
        }
    }
    return -1
}

findLocalMinimum(arr)