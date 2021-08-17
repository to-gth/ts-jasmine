






const reFor = (open: string, close: string) => {
  open = '\\' + open;
  close = '\\' + close;
  const str = `(${open}[^${open}${close}]*${close})(\\d*)`;
  return new RegExp(str);
};

const flatten = (wd: string) => {
  const [w, d] = wd.match(/([A-Z][a-z]?)(\d*)/);
  return w.repeat(+d || 1);
};
const atomsFrom = (w: string): string[] => {
  const wd = w.match(/[A-Z][a-z]?\d*/g);
  return wd.map(flatten);
}

export function parseMolecule(formula: string) {

  
  const reR = reFor('(', ')');
  const matchR = formula.match(reR);
  if (matchR) {
    const w = matchR[1];
    const atoms = atomsFrom(w);
    const d = matchR[2];
    const flatten = atoms.join('').repeat(+d || 1);
    formula.replace(reR, flatten);
  }

  const reC = reFor('{', '}');
  const reS = reFor('[', ']');
  const matchC = formula.match(reC);
  const matchS = formula.match(reS);
}







