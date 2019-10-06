


const spaceSub = (str, num) => {

    let pointer = 0;
    let pointer2 = 0;

    for (let i = 0; i < str.length; i += 1) {
        if (str.charAt(i) === ' ') {
            
            let j = i + 1
            deleteCount = 1
            while (str.charAt(j) === ' ') {
                j++
                deleteCount++
            }
            str = str.slice(0, i) + '%20' + str.slice(i + deleteCount)

        }
    }
    console.log(str)

}

spaceSub('Mr John   Smith      ', 13)