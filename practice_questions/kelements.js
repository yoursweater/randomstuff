

const findsum = (sub) => {
    let sum = sub.reduce((a,b) => {
        return a + b
    }, 0)
    return sum;
}

const findk = (arr, k) => {

    const sums = [];

    for (let i = 0; i < arr.length; i += k) {
         sums.push(findsum(arr.slice(i, i + k)))
    }
    console.log(sums);
    return sums;
}

findk([1,2,3,4,6,7,8,9,10], 2)