export class G964 {
  public static gcdi = (a: number, b: number): number => b ? G964.gcdi(b, a % b) : Math.abs(a);
  public static lcmu = (a: number, b: number): number => Math.abs(a * b) / G964.gcdi(a, b);
  public static som = (a: number, b: number): number => a + b;
  public static maxi = (a: number, b: number): number => Math.max(a, b);
  public static mini = (a: number, b: number): number => Math.min(a, b);

  public static operArray = (fct: (a: number, b: number) => number, arr: number[], init: number): number[] => {
    return arr.map((a) => init = fct(init, a));
  };
}
