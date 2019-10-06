let q1 = 123
let q2 = -123
let q3 = 120

//breaks 

var reverse = function(x) {
    let str = x.toString().split('-')

    if (str.length > 1) {
        let answer = '-' + str[1].split('').reverse().join('')

        let response = parseInt(Number(answer), 10)
        if (response > 2147483647) {
            console.log(response)
            return 0
        } else if (response <= -2147483647) {

        } else {
            return response
        }
    } else {
        let answer = str[0].split('').reverse().join('')

        let response = parseInt(Number(answer), 10)
        if (response >= 2147483647) {
            console.log(response)
            return 0
        } else if( response <= -2147483647){
            return 0
        } else {
            return response
        }
    }
};
reverse(q1)
