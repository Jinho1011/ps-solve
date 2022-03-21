function solution(record) {
  let users = {};
  let answer = [];
  const max = record.length;

  for (let i = 0; i < max; i++) {
    const line = record[i].split(" ");
    const command = line[0];
    const id = line[1];

    if (command === "Enter" || command === "Change") users[id] = line[2];
  }

  for (let i = 0; i < max; i++) {
    const line = record[i].split(" ");
    const command = line[0];
    const id = line[1];

    if (command === "Enter") {
      answer.push(users[id] + "님이 들어왔습니다.");
    } else if (command === "Leave") {
      answer.push(users[id] + "님이 나갔습니다.");
    }
  }

  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

const res = solution(record);
