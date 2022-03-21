class Node {
  constructor(value = "") {
    this.value = value;
    this.count = 0;
    this.children = new Map();
  }

  visit() {
    this.count += 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
      currentNode.visit();
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }

  search(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return currentNode;
  }
}

function solution(words) {
  const trie = new Trie();
  let result = 0;
  words
    .map((word) => {
      trie.insert(word);
      return word;
    })
    .map((word) => {
      let count = 0;
      let string = "";
      for (const char of word) {
        string += char;
        count += 1;
        if (trie.search(string).count === 1) break;
      }
      result += count;
    });

  return result;
}

const words = ["word", "war", "warrior", "world"];
// 4 3 4 4
console.log(solution(words));
