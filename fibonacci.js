// Traditional method using recursion

function fib(a) {
  if(a <= 1) {
    return a;
  }
  return fib(a-1) + fib(a-2);
}

console.log(fib(10)) // 55

// Using dynamic programming (saving pre-calculated entities)

const preCalculated = {
  0: 0,
  1: 1,
};

function fibDynamic(a) {
  if(preCalculated[a]) {
    return preCalculated[a];
  }
  for(let i = 2; i < a + 1; i++) { // starting from 2nd index, because 0th and 1st are already filled in our object
    preCalculated[i] = preCalculated[i-1] + preCalculated[i-2];
  }
  return preCalculated[a];
}

console.log(fibDynamic(10)) // 55
