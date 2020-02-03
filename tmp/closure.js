

const outer = (x) => {
  const inner = (y) => {
    return x + y
  }
  return inner
}

// const inner = outer(5)
// console.log(inner(3))
console.log(outer(5)(3))