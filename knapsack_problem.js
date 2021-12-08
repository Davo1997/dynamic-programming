// Complexity -> M * N, where M is items count and N is all possible targets (0-target)

const knapSack = (values, weights, target) => {
  let T = Array(values.length + 1).fill().map(() => Array(target +1 ).fill(0));
  for (let i = 1; i < values.length + 1; i++) {
    for (let j = 0; j < target + 1; j++) {
      if (weights[i-1] > j) {
        T[i][j] = T[i-1][j];
      } else {
        let previousRowSameTarget = T[i-1][j];
        T[i][j] = Math.max(previousRowSameTarget, T[i-1][j-weights[i-1]] + values[i-1]);
      }
    }
  }
  return T[values.length][target];
}

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

console.log(knapSack(values, weights, target)); // 17 (max possible price)
