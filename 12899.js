function solution(n) {
  let answer = "";
  const arr = [1, 2, 4];

  function Nto3(n) {
    let current = n - 1;
    const mod = current % 3;
    const quotinent = parseInt(current / 3);
    // console.log(`${n} : ${current}/3  = ${parseInt(current / 3)} + ${mod}`);
    current = parseInt(current / 3);
    answer += arr[mod];

    if (quotinent > 0) Nto3(current);
  }

  Nto3(n);
  answer = answer.split("").reverse().join("");
  return answer;
}

for (let i = 1; i < 14; i++) solution(i);
