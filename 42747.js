function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

// [3, 0, 6, 1, 5]
// [6, 5, 3, 1, 0]

// function solution(citations) {
//   let answer = 0;
//   const maxCitation = Math.max(...citations);

//   for (let citation = maxCitation; citation > 0; citation--) {
//     let cond1 = citation <= citations.length;
//     let cond2 =
//       citations.reduce(
//         (prev, current) => (citation <= current ? prev + 1 : prev),
//         0
//       ) >= citation;
//     let cond3 =
//       citations.reduce((prev, current) => {
//         if (citation <= current) return true;
//         else return current;
//       }, false) <= citation;

//     // console.log(citation, cond1, cond2, cond3);

//     if (cond1 & cond2 & cond3) {
//       answer = citation;
//       break;
//     }
//   }
//   //   for (let citation of citations) {
//   //     let cond1 = citation <= citations.length;
//   //     let cond2 =
//   //       citations.reduce(
//   //         (prev, current) => (citation <= current ? prev + 1 : prev),
//   //         0
//   //       ) >= citation;
//   //     let cond3 =
//   //       citations.reduce(
//   //         (prev, current) => {
//   //             if (citation <= current) return true;
//   //             else return current
//   //         },
//   //         false
//   //       ) <= citation;

//   //     console.log(citation, cond1, cond2, cond3);

//   //     if (cond1 & cond2 & cond3) {
//   //       answer = citation;
//   //       break;
//   //     }
//   //   }

//   return answer;
// }

// solution([3, 0, 6, 1, 5]);
// // console.log(solution([3, 0, 6, 1, 5]));
