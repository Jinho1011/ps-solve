class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(e) {
    this.queue[this.rear++] = e;
    return e;
  }

  dequeue() {
    return this.queue[this.front++];
  }

  getMax() {
    return Math.max(...this.queue.slice(this.front, this.rear));
  }

  print() {
    let str = "";
    for (let i = this.front; i < this.rear; i++) str += this.queue[i] + " ";
    console.log(str);
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  let current = location;
  let cnt = 0;

  priorities.map((p) => {
    queue.enqueue(p);
  });

  while (true) {
    queue.print();
    const top = queue.dequeue();

    if (top >= queue.getMax()) {
      cnt++;
      if (current === 0) break;
      else current--;
    } else {
      queue.enqueue(top);
      if (current === 0) current = queue.size() - 1;
      else current--;
    }
  }

  console.log(cnt);
}

solution([1, 1, 9, 1, 1, 1], 0);

// [2, 4, 1, 3]
// [4, 1, 3, 2]
// [1, 3, 2]
// [3, 2, 1]
// [2, 1]
// [1]
