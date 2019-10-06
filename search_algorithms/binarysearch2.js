
// Recursive binary search.

const recursiveSearch = (arr, val, min, max) => {
    let guess = Math.floor((min + max) / 2);
        if (max < min) {
            console.log('not found!')
            return -1;
        }

        if (arr[guess] > val) {
            let newMax = guess - 1;
            recursiveSearch(arr, val, min, newMax);
        } else if (arr[guess] < val) {
            let newMin = guess + 1;
            recursiveSearch(arr, val, newMin, max);
        } else {
            console.log('found it! it is: ' + guess)
            return guess;
        }

}

let myArr = [1,2,3,4,5,6,7,8,9,10]
recursiveSearch(myArr, 7, 0, myArr.length - 1)

// Another implementation of binary search.

const binarySearch = (arr, val) => {
    let guess;
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        guess = Math.floor((max + min) / 2);
        if (arr[guess] === val) {
            console.log('found it! Index is: ' + guess);
            return guess;
        } else if (arr[guess] > val) {
            max = guess - 1;
        } else {
            min = guess + 1;
        }
    }
    console.log('Not found.');
    return -1;
}

let arr = [1,2,3,4,5,6,7,8,9,10]

// binarySearch(arr, 2);
