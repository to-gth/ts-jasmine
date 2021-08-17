// import { ConsoleReporter } from "jasmine";
// import { G964 } from './codewars';
describe("codewars", function () {
    // beforeEach(function() {});
    it("should be", function () {
        //     const chunk = `
        // `.trim() + '\n';
        //     const expected: string = `
        // `.trim();
        // expect(4).toEqual(6);
        // var b, c, res;
        // b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
        // c = ["A", "B", "C", "D"];
        // res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
        // let s = G964.stockList(b, c)
        // expect(s).toEqual(res);
        function* gen0() {
            let a = 0;
            while (true) {
                console.log('a', a);
                const tmp = yield a;
                console.log('tmp', tmp);
                a += tmp;
            }
        }
        function* gen1(count) {
            let b = 1;
            const ite = gen0();
            while (count-- >= 0) {
                console.log('b', b);
                b = ite.next(b).value;
                yield b;
            }
        }
        const ite = gen1(7);
        expect(ite.next().value).toEqual(1);
        expect(ite.next().value).toEqual(1);
        expect(ite.next().value).toEqual(2);
        expect(ite.next().value).toEqual(3);
        expect(ite.next().value).toEqual(3);
    });
});
//# sourceMappingURL=codewars.spec.js.map