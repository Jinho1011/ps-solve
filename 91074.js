function solution(s) {
  let stack = [];

  for (const key of s) {
    if (key === "(") {
      stack.push(key);
    } else {
      if (stack.length > 0) stack.pop();
      else return false;
    }
  }

  return stack.length === 0;
}

const s1 = "()()";
const s2 = "(())()";
const s3 = ")()(";

solution(s1);
