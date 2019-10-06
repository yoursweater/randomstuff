
// currently set to traverse without targeting a specific end node. simply uncomment in order to
// reinstitute that functionality

class Graph {
  constructor(num) {
    this.num = num;
    this.vertices = new Map()
  }

  addVertex(v) {
    this.vertices.set(v, [])
  }

  addEdge(v, edge) {
    this.vertices.get(v).push(edge)
  }

  bfs(start, end) {
    // if (start === end) {
    //   console.log('done.')
    //   return start
    // }

    let visited = []
    let queue = []
    let traversals = 0

    queue.push(start)

    while (queue.length !== 0) {
      // console.log(queue)
      // console.log(visited)
      traversals++
      let current = queue.shift()
      console.log(current)
      // if (current === end) {
        // console.log('found it!')
        // console.log(current)
        // console.log(traversals)
      //   return current
      // }
      visited.push(current)
      let neighbors = this.vertices.get(current)
      neighbors.forEach(vertex => {
        if (visited.indexOf(vertex) === -1) {
          queue.push(vertex)
        }
      })
    }
  }

  dfs(start, target) {
    let stack = []
    let visited = []
    let traversals = 0
    
    stack.push(start)

    while (stack.length > 0) {
      // console.log(stack)
      // console.log(visited)
      traversals++
      let current = stack.pop()
      console.log(current)
      if (visited.indexOf(current) === -1) {
        visited.push(current)
      }
      // if (current === target) {
        // console.log(`found it! ${current}`)
        // console.log(traversals)
        // return current
      // }
      let neighbors = this.vertices.get(current)
      for (let i in neighbors) {
        if (visited.indexOf(neighbors[i]) === -1) {
          stack.push(neighbors[i])
        }
      }
      console.log(stack)
    }
  }

  // DFS WITH RECURSION
  
  // dfs2(start, end) {
  //   let visited = []
  //   let stack = []
  //   for (let i = 0; i < this.num; i++) {
  //     visited[i] = false;
  //   }
  //   // console.log(visited)

  //   const recurUtil = (vert, visited) => {
  //     console.log(vert)
  //     if (vert === end) {
  //       console.log('found it! ' + vert)
  //       return vert
  //     }
  //     visited[vert] = true
  //     let neighbors = this.vertices.get(vert)
  //     console.log(neighbors)
  //     for (let i in neighbors) {
  //       if (!visited[neighbors[i]]) {
  //         // stack.push(neighbors[i])
  //         recurUtil(neighbors[i], visited)
  //       }
  //     }
  //   }

  //   recurUtil(start, visited);
  // }


}

let myGraph = new Graph(5)
myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('c')
myGraph.addVertex('d')
myGraph.addVertex('e')
myGraph.addVertex('f')

myGraph.addEdge('a', 'b')
myGraph.addEdge('a', 'c')
myGraph.addEdge('b', 'd')
myGraph.addEdge('c', 'e')
myGraph.addEdge('c', 'f')

// console.log(myGraph.vertices.keys())

// myGraph.bfs('a', 'b')
console.log(myGraph.vertices.get('a'))

myGraph.dfs('a', 'b')