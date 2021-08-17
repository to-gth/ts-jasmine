export class G964 {

  public static stockList = (listOfArt, listOfCat) => {

    let map: Map<string, number> = listOfCat.reduce((map: Map<string, number>, cat) => {
      map.set(cat, 0);
      return map;
    }, new Map());

    const ret = listOfArt.reduce((map: Map<string, number>, art) => {
      const key = art[0];
      if (!map.has(key)) return map;
      const value = map.get(key) + (+art.split(' ')[1]);
      map.set(key, value);
      return map;
    }, map);

    let a = [];
    ret.forEach((v, k) => {
      a.push(`(${k} : ${v})`);
    });
    return a.join(' - ');
  }
}
