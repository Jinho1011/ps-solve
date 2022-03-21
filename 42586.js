function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((value, index) => {
    return Math.ceil((100 - value) / speeds[index]);
  });
  let max = 0;
  let values = [];
  for (let i = 0; i < days.length; i++) {
    if (max < days[i]) max = days[i];
    if (days[i] < max) days[i] = max;
    if (values.find((e) => e === days[i]) === undefined) values.push(days[i]);
  }
  values.map((v) => {
    const count = days.filter((i) => i === v).length;
    answer.push(count);
  });

  return answer;
}
// 100 - 93 = 7
// 7 / 1 = 7

// 100 - 30 = 70
// 70 / 30 = 2.333... = 3

// 100 - 55 = 45
// 45 / 5 = 9

// 100 - 95 = 5
// 5 / 4 = 1.25 = 2
const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
solution(progresses, speeds);
