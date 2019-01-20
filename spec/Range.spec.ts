import Range from '../ts/Range'

describe("Range", function() {

  it("from", function() {
    const r = Range.from(3)
    expect(r.start.value).toEqual(3)
    expect(r.end).toBeUndefined()
    const rr = Range.from(2, 5)
    expect(rr.start.value).toEqual(2)
    expect(rr.end.value).toEqual(7)
  });

  it("upto", function() {
    const r = Range.upto(4)
    expect(r.start).toBeUndefined();
    expect(r.end.value).toEqual(4);
  });

  it("includes", function() {
    const r = Range.from(1, 3)
    expect(Range.includes(0, r)).toBeFalsy();
    expect(Range.includes(1, r)).toBeTruthy();
    expect(Range.includes(3, r)).toBeTruthy();
    expect(Range.includes(4, r)).toBeFalsy();
  });
});
