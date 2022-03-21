function solution(w, h) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  return w * h - (w + h - gcd(w, h));
}

const res = solution(8, 12);
console.log(res);
