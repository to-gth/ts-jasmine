declare module process { export const stdin: { resume(): void; setEncoding(encoding: string): void; on(event: string, handler: (chunk: string) => void): void}; }

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) { console.log(paiza(chunk)); });

export function paiza(chunk: string): string {

  const lines = chunk.toString().split('\n').slice(0, -1);

  return '';
}

// export class Student {
//   fullName: string;
//   constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }
