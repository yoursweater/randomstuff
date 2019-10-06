//leet code 1169 invalid transactions

const invalidTransactions = transactions => {

  let splits = transactions.split('[')
  let str = splits[1]
  let splits2 = str.split(']')
  let str2 = splits2[0]
  let splits3 = str2.split('","')
  let splits4 = splits3.map(item => {
    item = item.replace(/"/g, '')
    return item
  })
  // console.log(splits4)
  let realTransactions = splits4.map(transaction => {
    let tmp = transaction.split(',')
    return {
      name: tmp[0],
      time: tmp[1],
      amt: tmp[2],
      city: tmp[3]
    }
  })
  console.log(realTransactions)
  let flagged = []
  realTransactions.forEach((item, idx) => {
    if (item.amt > 1000) {
      if (flagged.indexOf(idx) === -1) {
        flagged.push(idx)
      }
    }
    for (let i = idx + 1; i < realTransactions.length; i++) {
      if (realTransactions[i]) {
        if (realTransactions[i].name === item.name) {
          if (realTransactions[i].city !== item.city) {
            if (Math.abs(realTransactions[i].time - item.time) <= 60) {
              if (flagged.indexOf(idx) === -1) {
                flagged.push(idx)
              }
              if (flagged.indexOf(i) === -1) {
                flagged.push(i)
              }
            }
          }
        }
      }
    }
  })
  flagged = flagged.sort((a,b) => a - b)
  console.log(flagged)
  // for the answer i would just build a big string based on flagged
  return flagged
}

// invalidTransactions('transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]')
invalidTransactions('transactions = ["alice,20,800,mtv","alice,50,100,beijing"]')
// invalidTransactions('transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]')