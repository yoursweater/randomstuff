

const unperm = (array) => {
  let unperm = []
  let arr = array.slice()

  const swap = (a,b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  const genPerm = (n, arr) => {
    if (n === 1) {
      unperm.push(arr.slice())
    } else {
      for (let i = 0; i < arr.length - 1; i++) {
        genPerm(n - 1, arr)
        swap(n % 2 == 0 ? i : 0, n - 1)
      }
    }
  }
  genPerm(arr.length, arr)
  console.log(unperm)
  return unperm
}

unperm([1,1,2])