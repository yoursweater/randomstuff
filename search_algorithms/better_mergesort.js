

const mergesort = (arr, half = Math.floor(arr.length / 2)) => {
    if (half < 2) {
        return arr;
    }

    let left = arr.splice(0, half)

    return merger(mergesort(left), mergesort(arr))
}

const merger = (left, right) => {  
    let sortedArr = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

let sorted = mergesort([4,6,8,12,843,53,43,65,98,1,3,76,43,25,43])
console.log(sorted)