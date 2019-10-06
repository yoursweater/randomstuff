// function generatePermutations(Arr){
//   var permutations = [];
//   var A = Arr.slice();

//   function swap(a,b){
//     var tmp = A[a];
//     A[a] = A[b];
//     A[b] = tmp;
//   }

//   function generate(n, A){
//     if (n == 1){
//       permutations.push(A.slice());
//     } else {
//       for(var i = 0; i <= n-1; i++) {
//         generate(n-1, A);
//         swap(n % 2 == 0 ? i : 0, n-1);
//       }
//     }
//   }
//   generate(A.length, A);
//   return permutations;
// }

// console.log(generatePermutations([1,2,3]));


const generatePermutations = arr => {
  let permutations = []
  let copy = arr.split().slice()

  const swap = (a,b) => {
    [copy[a], copy[b]] = [copy[b], copy[a]]
  }

  const generate = (len, copy) => {
    if (len === 1) {
      permutations.push(copy.slice())
    } else {
      for (let i = 0; i <= len-1; i++) {
        generate(len - 1, copy)
        swap(len % 2 == 0 ? i : 0, len - 1)
      }
    }
  }


  return  permutations.map(mut => mut.join(''))
}

console.log(generatePermutations('abc'))