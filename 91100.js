// 큰 값이 나오면 이전 값 중 더 작은 값은 전부 삭제?

function solution(number, k) {
  const stack = [];
  let count = 0;

  // [] undefined 4
  // [ '4' ] 4 1
  // [ '4', '1' ] 1 7
  // [ '7' ] 7 7
  // [ '7', '7' ] 7 2
  // [ '7', '7', '2' ] 2 5
  // [ '7', '7', '5' ] 5 2
  // [ '7', '7', '5', '2' ] 2 8
  // [ '7', '7', '5', '8' ] 8 4
  // [ '7', '7', '5', '8', '4' ] 4 1
  // [ '7', '7', '5', '8', '4', '1' ]
  // [ '7', '7', '5', '8', '4', '1' ]

  for (const item of number) {
    console.log(stack, stack[stack.length - 1], item);
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}

const k = 4;
const number = "9234561";
console.log(solution(number, k));

// 775841
// delete 4 1 2 2
// 775841
