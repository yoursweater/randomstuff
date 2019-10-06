
function Trie(letter = '') {
  this.value = letter;
  this.children = {};
  this.isWord = false;
}

Trie.prototype.add = function(word, node = this) {
  
  for (const letter of word) {
    if (node.children[letter]) {
      node = node.children[letter];
    } else {
      const newNode = new Trie(letter);
      node.children[letter] = newNode;
      node = newNode;
    }
  }
  
  node.isWord = true;
};

let trie = new Trie()

trie.add('this')
trie.add('that')
trie.add('other')
console.log(trie)
