
function *fibonacciGenerator(count: number): IterableIterator<number> {
  let a = 1;
  let b = 1;
  while(count-- >= 0) {
    yield a;
    [a, b] = [b, a + b];
  }
}
