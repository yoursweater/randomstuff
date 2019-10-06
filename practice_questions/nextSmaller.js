// find the next smallest digit that contains the same numbers

const nextSmaller = (num) => {

  let digits = num.toString().split('')
  let counter = num

  while (counter > 0) {
    counter--
    let newDigits = counter.toString().split('')
    let copy = digits.slice()
    
    for (let i = 0; i < newDigits.length; i++) {
      let match = copy.indexOf(newDigits[i])
      if (match > -1) {
        copy.splice(match, 1)
      } 
    }
    if (copy.length === 0) {
      console.log('match!')
      console.log(newDigits.join(''))
      return Number(newDigits.join(''))
    }
  }
  

}

// nextSmaller(21)
nextSmaller(531)
nextSmaller(2071)