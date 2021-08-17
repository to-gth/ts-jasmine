
class Molecule {
  static from(raw: string): Molecule {
    return new Molecule(raw);
  }
  private re = /([A-Z][a-z]?)(\d*)/;
  atom: string;
  index: number;
  constructor(raw: string) {
    const [_, atom, index] = raw.match(this.re);
    this.atom = atom;
    this.index = +index || 1;
  };
  serialized() {
    return this.atom.repeat(this.index);
  }
}

class Innermost {
  private re = /[A-Z][a-z]?\d*/g;
  private rawMolecules(): string[] {
    return this.innermost.match(this.re);
  }
  private molecules(): Molecule[] {
    return this.rawMolecules().map(Molecule.from);
  }
  constructor(private innermost: string, private index: number = 1) {
    this.index = (this.index || 1);
  }
  serialized() {
    return this.molecules()
               .map((m) => m.serialized()).join('')
               .repeat(+this.index || 1);
  }
  map() {
    console.log(this.innermost, this.rawMolecules());
    const map = this.molecules().reduce((map, molecule) => {
      const count = map[molecule.atom] || 0;
      map[molecule.atom] = count + molecule.index;
      return map;
    }, {});
    return map;
  }
}

const reFor = (open: string, close: string) => {
  open = '\\' + open;
  close = '\\' + close;
  const not = '[^\\(\\)\\[\\]\\{\\}]*';
  const dig = '\\d*';
  const str = `(${open}${not}${close})(${dig})`;
  return new RegExp(str);
};

const parseInnermost = (formula: string, open: string, close: string): string => {
  const re = reFor(open, close);
  const matched = formula.match(re);
  if (!matched) return formula;
  const innermost = new Innermost(matched[1], +matched[2]);
  return formula.replace(re, innermost.serialized());
}
export function parseMolecule(formula: string) {
  while (true) {
    const pre = formula;
    formula = parseInnermost(formula, '(', ')');
    formula = parseInnermost(formula, '[', ']');
    formula = parseInnermost(formula, '{', '}');
    if (formula === pre) break;
  }
  const innermost = new Innermost(formula);
  return innermost.map();
}
