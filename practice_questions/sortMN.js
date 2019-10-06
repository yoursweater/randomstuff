
const findSort = arr => {

    let start;
    let end;
    let pointer = 0
    let current = arr[pointer]
    let next = arr[pointer + 1]

    while (current <= next && pointer + 1 < arr.length) {
        pointer++
        current = arr[pointer]
        next = arr[pointer + 1]
    }

    if (pointer === arr.length - 1) {
        console.log('arr is sorted.')
        return
    } else {
        start = pointer
    }

    console.log(start)

    let highest = arr[pointer]
    console.log(highest)

}

// findSort([1,4,3,5,5])
findSort([1,2,4,7,10,11,7,12,6,7,16,18,19])