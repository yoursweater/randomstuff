
const describe = int => {

    const dict = new Map()
    dict.set('1', 'one')
    dict.set('2', 'two')
    dict.set('3', 'three')
    dict.set('4', 'four')
    dict.set('5', 'five')
    dict.set('6', 'six')
    dict.set('7', 'seven')
    dict.set('8', 'eight')
    dict.set('9', 'nine')
    dict.set('0', 'zero')

    let arr = int.toString().split('')
    let response = ''
    let resArr = []

    for (let i = 0; i < arr.length; i += 1) {
        let word = dict.get(arr[i])
        resArr.push(word)
    }
    console.log(resArr)

    let digitDescriptors = ['hundred', 'thousand', 'million']

    let flipArr = resArr.reverse()

    for (let i = 0; i < flipArr.length; i++) {
        
        if (i === 2 && flipArr[i] !== 'zero') {
            flipArr[i] = flipArr[i] += ' hundred'
        }
        if (i === 3 && flipArr[i] !== 'zero') {
            flipArr[i] = flipArr[i] += ' thousand,'
        }
    }

    console.log(flipArr.reverse().join(' '))

}

describe(1324)