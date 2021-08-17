export class Challenge {
  static log(base: number, antilog: number): number {
    return [antilog, base].map(Math.abs)
                          .map(Math.log)
                          .reduce((a, b) => a / b);
  }
  static getExponent(n: number, p: number): number | null {
    if (p <= 1) return null;
    let x = ~~Challenge.log(p, n);
    while(x > 0) {
      if (n % (p ** x) === 0) break;
      x--;
    }
    return x;
  }
}
