
import { G964 } from './codewars';

describe("codewars", function() {

  // beforeEach(function() {});

  it("should be", function() {

//     const chunk = `
// `.trim() + '\n';
//     const expected: string = `
// `.trim();
    // expect(4).toEqual(6);

    var b, c, res;
    b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
    c = ["A", "B", "C", "D"];
    res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
    let s = G964.stockList(b, c)
    expect(s).toEqual(res);
  });
});
