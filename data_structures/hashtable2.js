// second hash table for practice purposes

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    };
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
    };

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i += 1) {
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }

    insert(key, val) {
        let idx = this.hash(key);
        if (!this.table[idx]) {
            this.table[idx] = new Node(key, val)
        } else if (this.table[idx].key === key) {
            this.table[idx].val = val;
        } else {
            let current = this.table[idx];
            while (current.next) {
                if (current.next.key === key) {
                    current.next = new Node(key, val)
                    return;
                }
                current = current.next
            }
            current.next = new Node(key, val)
        }
    }

    retrieve(key) {
      let idx = this.hash(key)
      if (!this.table[idx]) {
        console.log('sorry, nothing there!')
        return
      } else {
        let current = this.table[idx]
        if (current.key === key) {
          console.log('found it!')
          console.log(current.val)
          return current.val
        } else {
          while (current) {
            if (current.key === key) {
              console.log('found it!')
              console.log(current.val)
              return current.val
            }
            current = current.next
          }
          console.log('not found!')
        }
      }
    }
}

let table = new HashTable(5)

table.insert('blah', 12)
table.insert('huh', 2)
table.insert('blah', 11)
table.insert('waht', 2)
table.insert('right', 6)
table.insert('uh', 15)
table.insert('test1', 15)
table.insert('test2', 15)
console.log(table)

table.retrieve('right')
// console.log(table.table[1])