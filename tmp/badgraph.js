

class Graph {
  constructor() {
    this.nodes = []
    this.edges = {}
  }

  addVertex(name) {
    this.nodes.push(name)
  }

  addEdge(a, b) {
    if (this.edges[a]) {
      // console.log(this.edges[a])
      let arr = this.edges[a]
      arr.push(b)
      // this.edges[a] = this.edges[a].push(b)
    } else {
      this.edges[a] = [b]
    }
  }

  searchVertex(start, stop) {
    let neighbors = this.edges[start]
    // console.log(neighbors)
    let visited = []
    let queue = []
    for (let i = 0; i < neighbors.length; i++) {
      queue.push(neighbors)
    }
    while (queue.length > 0) {
      let curr = queue.shift()
      
      if (curr === stop) {
        console.log('found it!')
        return
      } else {
        visited.push(curr)
        console.log(visited)
        let newNeighbors = this.edges[curr]
        if (newNeighbors) {
          for (let j = 0; j < newNeighbors.length; j++) {
            if (visited.indexOf(newNeighbors[j] === -1)) {
              queue.push(newNeighbors[j])
            }
          }
        }
      }
    }
  }
}
// directed, so you can only travel in one direction 
let myGraph = new Graph()

myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('c')
myGraph.addVertex('d')

myGraph.addEdge('a', 'b')
myGraph.addEdge('a', 'd')
myGraph.addEdge('d', 'c')
myGraph.addEdge('c', 'b')
myGraph.addEdge('a', 'c')


//FIX SEARCHVERTEX
myGraph.searchVertex('a', 'd')


