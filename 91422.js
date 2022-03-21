function getParent(disjoints, target) {
  if (disjoints.get(target) === target) {
    return target;
  } else {
    return getParent(disjoints, disjoints.get(target));
  }
}

function setParent(disjoints, child, parent) {
  child = getParent(disjoints, child);
  parent = getParent(disjoints, parent);
  if (child < parent) {
    disjoints.set(child, parent);
  } else {
    disjoints.set(parent, child);
  }
}

function isCycle(disjoints, v1, v2) {
  return getParent(disjoints, v1) == getParent(disjoints, v2);
}

function solution(n, costs) {
  const edges = new Set();
  const disjoints = new Map();
  let answer = 0;

  costs.map((value) => {
    edges.add(value[0], value[0]);
    edges.add(value[1], value[1]);
  });

  for (let edge of edges) disjoints.set(edge, edge);

  // sort costs
  costs.sort((a, b) => a[2] - b[2]);

  // select edge which is not cycle
  costs.map((value) => {
    if (!isCycle(disjoints, value[0], value[1])) {
      if (value[0] > value[1]) setParent(disjoints, value[0], value[1]);
      else setParent(disjoints, value[1], value[0]);
      answer += value[2];
    }
  });

  return answer;
}
