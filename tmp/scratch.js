const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    console.log(arr)
    console.log(m)
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);

        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)
 console.log(result)
 return result;
}

// permutator(['a', 'b', 'c'])

function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  // console.log(results)
  return results;
}

let res = getAllPermutations('abcd')
console.log(res)



// function perm(xs) {
//   let ret = [];

//   for (let i = 0; i < xs.length; i = i + 1) {
//     let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
//     console.log(rest)
//     if(!rest.length) {
//       ret.push([xs[i]])
//     } else {
//       for(let j = 0; j < rest.length; j = j + 1) {
//         ret.push([xs[i]].concat(rest[j]))
//       }
//     }
//   }
//   return ret;
// }

// console.log(perm([1,2,3]).join("\n"));



function permutations(arr) {
  return (arr.length === 1) ? arr :
  arr.reduce((acc, cv, index) => {
      console.log(acc)
      console.log(cv)
      console.log(index)
      let remaining = [...arr];
      remaining.splice(index, 1);
      return acc.concat(permutations(remaining).map(a => [].concat(cv,a)));
  }, []);
}

// let result = permutations(['a', 'b', 'c'])
// console.log(result)

// function permutator2 (arr) {
//   var permutations = [];
//   if (arr.length === 1) {
//     return [ arr ];
//   }

//   for (var i = 0; i <  arr.length; i++) { 
//     var subPerms = permutator2(arr.slice(0, i).concat(arr.slice(i + 1)));
//     for (var j = 0; j < subPerms.length; j++) {
//       subPerms[j].unshift(arr[i]);
//       permutations.push(subPerms[j]);
//     }
//   }
//   return permutations;
// }



//abc
//acb
//bac
//bca
//cba
//cab