// 0 1 2 3 4
// b
// b a a b a a
function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    console.log(stack);
    if (stack.length === 0) {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }
  console.log(stack);

  return stack.length === 0 ? 1 : 0;
}

function solution2(str) {
  if (str.length % 2 != 0) return 0;
  Array.prototype.myShiftDelete = function arrayMyShiftDelete(index) {
    var stop = this.length - 1;
    while (index < stop) {
      this[index] = this[++index];
    }

    this.pop();
  };

  let s = str.split("");
  for (let i = 1; i < s.length; i++) {
    // console.log(s, i);
    if (s[i] === s[i - 1]) {
      s.myShiftDelete(i);
      s.myShiftDelete(i - 1);
      //   s = [...s.slice(0, i - 1), ...s.slice(i + 1)];
      i = i > 1 ? i - 2 : 0;
    }
  }
  return s.length === 0 ? 1 : 0;
}

function solution1(s) {
  String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
  };
  let strArr = s.split("");
  let items = [...new Set(strArr)];
  items = items.map((item) => item + item);

  while (true) {
    let exist = false;

    for (let item of items) {
      if (s.indexOf(item) >= 0) {
        s = s.replaceAll(item, "");
        exist = true;
      }
    }

    if (!exist) break;
  }

  return s === "" ? 1 : 0;
}

const s = "baabaa";
console.log(solution(s));
