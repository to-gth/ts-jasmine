class Point {

  x: number;
  y: number;

  constructor(x: number) {
    this.x = x;
    this.y = x ** 2;
  }

  distanceTo(p: Point): number {
    const dx = Math.abs(p.x - this.x);
    const dy = Math.abs(p.y - this.y);
    return (dx ** 2 + dy ** 2) ** 0.5;
  }
};

export class G964 {

  private static truncatedTo9(num) {
    const shift = 1e9;
    return ~~(num * shift) / shift;
  }

  public static lenCurve = (n) => {
    const dx = 1 / n;
    let len = 0;
    for(let i = 0; i < n; i++) {
      const p1 = new Point(dx * i);
      const p2 = new Point(dx * (i + 1));
      len += p1.distanceTo(p2);
    }
    return G964.truncatedTo9(len);
  }
}
