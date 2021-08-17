export class G964 {

  public static tankvol(h, d, vt) {

    const r = d / 2;
    const pi = Math.PI;
    const post = r - h;

    const bottom = (r**2 - post**2) ** 0.5 * 2;
    const triangle = bottom * post / 2;

    const circle = pi * r * r;
    const x = (post / r) % 1;
    const theta = Math.acos(x) * 2;
    const sector = circle * theta / (2 * pi);

    const green = sector - triangle;

    const length = vt / circle;
    return ~~(green * length);
  }
}
