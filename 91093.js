function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === target) return mid;

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1``;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // sum += 시간 / 심사시간 = 심사관 한명이 처리하는 입국자 수
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    console.log(left, mid, right);
    console.log(sum);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

const n = 6;
const times = [7, 10];
console.log(solution(n, times));
