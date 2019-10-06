
class Shelter {
    constructor() {
        this.animals = []
    }

    enqueue(type) {
        this.animals.push(type)
    }

    dequeueAny() {
        return this.animals.shift()
    }

    dequeueDog() {
        for (let i = 0; i < this.animals.length; i += 1) {
            if (this.animals[i] === "Dog") {
                let animal = this.animals.splice(i, 1)
                console.log(animal)
                console.log(this.animals)
                return animal
            }
        }
    }

    dequeueCat() {
        for (let i = 0; i < this.animals.length; i += 1) {
            if (this.animals[i] === "Cat") {
                let animal = this.animals.splice(i, 1)
                console.log(animal)
                console.log(this.animals)
                return animal
            }
        }
    }

    describe() {
        this.animals.forEach(animal => console.log(animal))
    }
}

let shelter = new Shelter()
shelter.enqueue('Dog')
shelter.enqueue('Dog')
shelter.enqueue('Dog')
shelter.enqueue('Cat')
shelter.enqueue('Dog')
shelter.enqueue('Cat')
shelter.describe()
shelter.dequeueCat()
shelter.describe()
