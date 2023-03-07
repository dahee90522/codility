function solution(N, A) {
  let maxCounter = Math.max(...A);
  let counters = new Array(N).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (A[i] === maxCounter) {
      counters.fill(Math.max(...counters));
    } else {
      counters[A[i] - 1] += 1;
    }
  }
  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
// [ 3, 2, 2, 4, 2 ]
// https://app.codility.com/demo/results/trainingK7NRSX-WKS/
