const arr1 = [1,2,3,9]
const arr2 = [1,2,4,4]


const findsum = (arr, p1, p2, x) => {
    if (p1 >= p2) {
        console.log('no match')
        return null;
    }

    if (arr[p1] + arr[p2] === x) {
        console.log(p1)
        console.log(p2)
        return [p1, p2]
    } else if (arr[p1] + arr[p2] < x) {
        findsum(arr, p1 += 1, p2, x)
    } else {
        findsum(arr, p1, p2 -= 1, x)
    }
    
}

findsum(arr1, 0, arr1.length -1, 8)
findsum(arr2, 0, arr2.length - 1, 8)

//solved recursively, but can also be solved with a while loop