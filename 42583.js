class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.queue[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  enqueue(value) {
    if (this.size() === 0) {
      this.queue[this.rear] = value;
    } else {
      this.rear += 1;
      this.queue[this.rear] = value;
    }
  }

  dequeue() {
    const value = this.queue[this.front];
    if (this.front === this.rear) {
      delete this.queue[this.front];
      this.front = this.rear = 0;
    } else {
      delete this.queue[this.front];
      this.front += 1;
    }
    return value;
  }

  sum() {
    if (this.queue[this.front] === undefined) {
      return 0;
    } else {
      let sum = 0;
      for (let i = this.front; i <= this.rear; i++) sum += this.queue[i].weight;
      return sum;
    }
  }

  peak() {
    if (this.queue[this.front] === undefined) {
      return 0;
    } else {
      return this.queue[this.front];
    }
  }

  increasePos() {
    for (let i = this.front; i <= this.rear; i++) {
      if (this.queue[i] !== undefined) {
        this.queue[i].position += 1;
      }
    }
  }
}

function canEnter(waiting, passing, weight, bridge_length) {
  return (
    waiting.size() > 0 &&
    passing.sum() + waiting.peak().weight <= weight &&
    passing.size() < bridge_length
  );
}

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const passed = [];
  const passing = new Queue();
  const waiting = new Queue();
  truck_weights.map((e) => waiting.enqueue({ weight: e, position: 0 }));

  while (passed.length < truck_weights.length) {
    if (canEnter(waiting, passing, weight, bridge_length)) {
      passing.enqueue(waiting.dequeue());
      passing.increasePos();
    } else {
      passing.increasePos();
      if (passing.peak().position > bridge_length) {
        passed.push(passing.dequeue());
        if (canEnter(waiting, passing, weight, bridge_length)) {
          passing.enqueue(waiting.dequeue());
          passing.increasePos();
        }
      }
    }
    console.log(answer, passing.queue);
    answer += 1;
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
