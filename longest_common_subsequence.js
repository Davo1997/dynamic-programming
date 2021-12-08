// Finding two arrays' longest common subsequence WITHOUT RECURSION, using dynamic programming (with matricies).

function longestCommonSubsequence(a, b) {
  const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
  for(let i = 1; i < a.length + 1; i++) {
    for(let j = 1; j < b.length + 1; j++) {
      if(a[i-1] === b[j-1]) {
        matrix[i][j] = 1 + matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
      }
    }
  }
  return matrix[a.length][b.length];
}

let a = [2,3,4];
let b = [2,3,7,8,4];

console.log(longestCommonSubsequence(a,b));
