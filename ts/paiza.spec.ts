
import { paiza } from './paiza';

describe("paiza", function() {

  // beforeEach(function() {});

  it("should be", function() {

    const chunk = `
`.trim() + '\n';
    const expected: string = `
`.trim();
    expect(paiza(chunk)).toEqual(expected);
  });
});
