// https://ddb8036631.github.io/programmers/72411_%EB%A9%94%EB%89%B4-%EB%A6%AC%EB%89%B4%EC%96%BC/

function solution(orders, course) {
  const candidateMap = new Map();
  const maxCountMap = new Map();
  const courseSet = new Set(course);

  function comb(idx, order, result) {
    if (courseSet.has(result.length)) {
      let count = candidateMap.get(result) || 0;
      candidateMap.set(result, ++count);

      const max = maxCountMap.get(result.length) || 0;

      if (max < count) {
        maxCountMap.set(result.length, count);
      }
    }

    for (let i = idx; i < order.length; i++) {
      comb(i + 1, order, result + order[i]);
    }
  }

  orders
    .map((order) => order.split("").sort().join(""))
    .forEach((order) => comb(0, order, ""));

  return course
    .map((length) => {
      const max = maxCountMap.get(length);
      return Array.from(candidateMap)
        .filter((e) => e[0].length === length && e[1] === max && e[1] > 1)
        .map((e) => e[0]);
    })
    .flatMap((e) => e)
    .sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

console.log(solution(orders, course));
