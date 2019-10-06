let myarr = [1,2,3,4,5]

const printArr = (i) => {
  console.log(myarr[i])
  if (i < myarr.length) {
    setTimeout(() => {
      i++
      printArr(i)
    }, 1000)
  }

}

// printArr(0)

var s = ["John", "Alex", "Mark"];
for (var i = 0; i < s.length; i++) {
    (function(i) {
        setTimeout(() => {
           console.log(s[i])
        }, 3000 * i);
    })(i);
}