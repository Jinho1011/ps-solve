function solution(numbers) {
  if (numbers.every((e) => e === 0)) return "0";

  numbers = numbers.sort((a, b) => {
    let comp = Number(String(b)[0]) - Number(String(a)[0]);
    if (comp > 0) {
      return 1;
    } else if (comp < 0) {
      return -1;
    } else {
      return Number(String(b) + String(a)) - Number(String(a) + String(b));
    }
  });

  // 정렬 우선순위
  // 1. 앞자리 큰거부터
  // 2. 앞자리가 같다면

  return numbers.join("");
}

console.log(solution([0, 0]));
