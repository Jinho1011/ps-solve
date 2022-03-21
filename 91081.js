function solution(genres, plays) {
  const genresMap = new Map();
  const albumMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    genresMap.set(genres[i], plays[i] + genresMap.get(genres[i]) || 0);

    if (albumMap.get(genres[i]) === undefined) {
      albumMap.set(genres[i], [{ index: i, play: plays[i] }]);
    } else {
      albumMap.set(
        genres[i],
        [...albumMap.get(genres[i]), { index: i, play: plays[i] }].sort(
          (a, b) => b.play - a.play
        )
      );
    }
  }

  const genresArr = Array.from(genresMap);
  genresArr.sort((a, b) => b[1] - a[1]);

  return genresArr
    .map((value) => {
      return albumMap
        .get(value[0])
        .slice(0, 2)
        .map((value) => {
          return value.index;
        });
    })
    .flat();
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
