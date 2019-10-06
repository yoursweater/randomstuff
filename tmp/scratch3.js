class CustomArray {
    constructor(size) {
        this.arr = new Array(size)
        this.numItems = 0
        this.len = size
    }

    describe() {
        // console.log(this.arr.length)
        let counter = 0
        this.arr.forEach(num => {
            // console.log(num)
            if (num) {
                counter++
            }
        })
        this.numItems = counter
        // console.log('Num items: ' + this.numItems)
        if (this.len === this.numItems) {
            // console.log('at capacity!')
            let newArr = new Array(this.len)
            let replacedmentArr = this.arr.concat(newArr);
            this.len = replacedmentArr.length
            this.numItems = this.arr.length
            this.arr = replacedmentArr
            // console.log(this.arr)
            // console.log(this.len)
            // console.log(this.numItems)
        }

    }

    insert(idx, val) {
        this.arr.splice(idx, 1, val)
    }

    remove(idx) {
        this.arr[idx] = null
    }

    find(val) {
        // if (this.arr.indexOf(val) > -1) {
        //     return this.arr.indexOf(val)
        // } else {
        //     return -1
        // }
        const binarySearch = (arr, val) => {
            let middle = Math.floor(arr.length / 2)
            if (arr[middle] === val) {
                return middle
            } else if (arr[middle] > val) {
                return binarySearch(arr.slice(middle + 1), val)
            } else  if (arr[middle] < val) {
                return binarySearch(arr.slice(0, middle - 1, val))
            }
        }
    }

}

// let myArr = new CustomArray(3)
// myArr.insert(0, 10)
// myArr.insert(1, 20)
// myArr.insert(2, 30)
// myArr.describe()
// myArr.find(20)

const binarySearch = (arr, val) => {
    let middle = Math.floor(arr.length / 2)
    if (arr[middle] === val) {
        return middle
    } else if (arr[middle] > val) {
        console.log(middle)
        return binarySearch(arr.slice(middle + 1), val)
    } else if (arr[middle] < val) {
        console.log(middle)
        return binarySearch(arr.slice(0, middle - 1, val))
    } else {
        return -1
    }
}


let arr = [1,4,7,8,10,15]
binarySearch(arr, 15)



/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var htmlCollectionType = '[object HTMLCollection]';
var nodeListType = '[object NodeList]';

/**
 * Check if a value is a node list
 * console.log('hey')
 * @param {*} val
 * @returns {Boolean} kljsdf
 */
// export default function isNodeList(val) {
//   var type = Object.prototype.toString.call(val);
//   return type === htmlCollectionType || type === nodeListType;
// }