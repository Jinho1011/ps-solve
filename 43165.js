function solution(numbers, target) {
  function dfs(index, value) {
    console.log("🚀 ~ file: 43165.js ~ line 3 ~ dfs ~ value", value);
    if (index == numbers.length) {
      if (value === target) return 1;
      else return 0;
    }
    let res = 0;
    res += dfs(index + 1, value - numbers[index]);
    res += dfs(index + 1, value + numbers[index]);
    return res;
  }

  return dfs(0, 0);
}

const numbers = [4, 1, 2, 1];
const target = 4;
solution(numbers, target);
