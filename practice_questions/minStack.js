class MinStack {
    constructor() {
        this.minstack = []
        this.regstack = []
    }

    push(val) {
        this.regstack.push(val)
        if (this.minstack.length === 0) {
            this.minstack.push(val)
        } else {
            if (val <= this.minstack[this.minstack.length - 1]) {
                this.minstack.push(val)
            } 
        }
    }

    pop() {
        let val = this.regstack.pop()
        if (this.minstack[this.minstack.length - 1] >= val) {
            this.minstack.pop()
        }
    }

    describe() {
        this.minstack.forEach(stack => console.log(stack))
        console.log("==========")
        this.regstack.forEach(stack => console.log(stack))
    }

    findMin() {
        console.log(this.minstack[this.minstack.length - 1])
    }
}

let stack = new MinStack()
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(9)
stack.push(22)
// stack.describe()
console.log('MIN:')
stack.findMin()
stack.pop()
stack.pop()
// stack.describe()