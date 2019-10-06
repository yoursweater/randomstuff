// Normal palindrome is defined as a string that reads the same backwards as forwards, for example "abccba".
// Chunked palindrome is defined as a string that you can split into chunks and it will form a palindrome.
// For example, "volvo". You can split it into (vo)(l)(vo). Let A = "vo", B = "l", so the original string is ABA which is a palindrome.


const chunked = (str) => {
  let arr = str.split('')
  if (arr.length < 2) {
    console.log(1)
    return 1
  }
  let currentLetter = null
  let lastIndex = null
  let chunks = 0
  let currentIndex = 0

  while (arr.length) {
    //for the first letter in your current chunk, iterate through the string and find the last copy of it
    currentLetter = arr[currentIndex]
    for (let i = currentIndex + 1; i < arr.length; i++) {
      if (arr[i] === currentLetter) {
        lastIndex = i
      }
    }
    // if there are no copies, that's one chunk itself. add a chunk to the counter and break.
    if (!lastIndex) {
      console.log('no repeats')
      chunks += 1
      break
    }
    // with the last index now existing, find out how long it matches for
    let firstLetter =  arr[currentIndex + 1]
    let lastLetter = arr[lastIndex + 1]
    let tempCounter = 1
    // catch edge cases
    if (firstLetter === undefined || lastLetter === undefined) {
      chunks += 2
      arr = arr.slice(currentIndex + tempCounter, lastIndex)
      console.log(arr)
      if (arr.length === 0) {
        break;
      } else if (arr.length === 1) {
        chunks += 1
        break;
      } else {

      }
    } else {
      console.log('this is happening')
      // if it's not an edge, keep extending the chunk until you find the edge.

      // if the second letters don't match, it's not a subchunk, it's just one big chunk, so add 1 and break
      if (firstLetter !== lastLetter) {
        chunks += 1
        break;
      }

      // if the letters match, we keep extending until they don't
      while (firstLetter && lastLetter) {
        firstLetter =  arr[currentIndex + tempCounter]
        lastLetter = arr[lastIndex + tempCounter]
        if (firstLetter === undefined || lastLetter === undefined) {
          chunks += 2
          arr = arr.slice(currentIndex + tempCounter, lastIndex)
          break
        }
        
        if (firstLetter !== lastLetter) {
          chunks += 1
          break;
        }
  
        tempCounter++
      }
    }
    lastIndex = null
    console.log('running')
  }
  console.log(chunks)
  return chunks
}


// Input: "valve"
// Output: 1
// Explanation: You can't split it into multiple chunks so just return 1 (valve)
// Example 2:
// chunked('valve')

// Input: "voabcvo"
// Output: 3
// Explanation: (vo)(abc)(vo)
// Example 3:
// chunked('voabcvo')

// Input: "vovo"
// Output: 2
// Explanation: (vo)(vo)
// Example 4:
// chunked('vovo')

// Input: "volvolvo"
// Output: 5
// Explanation: (vo)(l)(vo)(l)(vo)
// Example 5:
// chunked('volvolvo')

// Input: "volvol"
// Output: 2
// Explanation: (vol)(vol)
// Example 6:

// Input: "aaaaaa"
// Output: 6
// Explanation: We can split it into (aaa)(aaa), but the optimal split should be (a)(a)(a)(a)(a)(a)
// chunked('aaaaaa')


// private static int minCuts(String S, int count) {
 
//   if (S==null || S.length()==0) return count;		 
//   int N = S.length();
//   for(int i=0;i<(N/2);i++) {
//     String left = S.substring(0, i+1);
//     String right = S.substring(N-i-1, N);
//           String middle = S.substring(i+1,N-i-1);
//     if (left.equals(right))  return minCuts(middle, count+2);
//   }
//   return count+1;
// }

const recursiveChunked = (str, count) => {
  if (str === null || str.length === 0) {
    console.log(count)
    return count;
  }
  if (str.length === 1) {
    console.log(count + 1)
    return count + 1
  }
  let len = str.length;
  for (let i = 0; i < len/2; i++) {
    let strLeft = str.slice(0, i + 1)
    let strRight = str.slice(len - i - 1, len)
    let middle = str.slice( i + 1, len - i - 1 )
    if (strLeft === strRight) {
      return recursiveChunked(middle, count + 2)
    } 
  }
  console.log(count + 1)
  return count + 1

}

// recursiveChunked('volvo', 0)

// recursiveChunked('start', 0)

// recursiveChunked('a', 0)

// recursiveChunked('aaaa', 0)

recursiveChunked('volvol', 0)

// recursiveChunked('volvolabcvolvol', 0)