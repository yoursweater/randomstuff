let catImage1 = document.getElementById('cat')
let catImage2 = document.getElementById('cat')
let cat

let counter = 1

let carArr = []
catArr.push(catImage1)

fetch('https://api.thecatapi.com/v1/images/search', {
    mode: "cors"
})
    .then(res => {
        console.log(res.url)
        cat = res.url
        // console.log(cat)
        console.log(catImage)
        catImage.src = cat
    })


let button = document.getElementById('changecats')  

button.addEventListener('click', function() {
    let hidecat = 'cat' + counter
    counter++
    let showcat = 'cat' + counter
    hidecat.removeClass('show-cat').
    
})