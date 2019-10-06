

// print out the items of an array one after another
let arr = [1,2,4,5,6]

const printArr = (ar) => {

  for (let j = 0; j < ar.length; j++) {
    setTimeout(() => {
      console.log(ar[j])
    }, j * 1000)
  }
}




function countLetters(string) {
	const trimmedString = string.split(" ").join("");
  let stringCounterObject = {};
  
  for (let i = 0; i < trimmedString.length; i++) {
  	if (stringCounterObject[trimmedString[i]] >= 1) {
    	stringCounterObject[trimmedString[i]] += 1;
    } else {
    	stringCounterObject[trimmedString[i]] = 1;
    }
  }
  console.log(stringCounterObject)
  return stringCounterObject;
}





countLetters('this is a test')