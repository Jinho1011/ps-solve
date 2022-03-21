class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

function solution(priorities, location) {
  // 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
  // 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
  // 3. 그렇지 않으면 J를 인쇄합니다.
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue({ value: priorities[i], index: i });
  }

  priorities.sort((a, b) => b - a);

  queue.print();
  console.log(
    "🚀 ~ file: 91078.js ~ line 45 ~ solution ~ priorities",
    priorities
  );

  let count = 0;

  while (true) {
    const current = queue.peek();
    if (current.value < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const node = queue.dequeue();
      count += 1;
      if (location === node.index) {
        return count;
      }
    }
    console.log("QUEUE");
    queue.print();
  }
}

const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
