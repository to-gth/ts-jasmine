import Brand from './Brand';

type Int = Brand<number, 'Int'>

namespace Int {

  export const admits = (a: number): a is Int => {
    return Number.isInteger(a)
  }

  export const corrected = (n: number): Int => {
    const corrected = ~~n
    if (!admits(corrected)) throw new Error('Failed to correct n to Int')
    return corrected
  }
}

// namespace Int {

//   export type Positive = Brand<Int, 'Positive'>

//   export namespace Positive {

//     const min = Int.corrected(1)
    
//     export const admits = (a: number): a is Positive => {
//       if (!Int.admits(a)) return false
//       if (a < min) return false
//       return true
//     }

//     const correctedInt = (n: number): Int => {
//       if (n <= min) return min
//       return Int.corrected(n)
//     }

//     export const corrected = (n: number): Positive => {
//       const int = correctedInt(n)
//       if (!admits(int)) throw new Error('Failed to correct n to Positive')
//       return int
//     }
//   }
// }

// namespace Int {

//   export type Natural = Brand<Int, 'Natural'>

//   export namespace Natural {

//     export const min = Int.corrected(0)
    
//     export const admits = (a: number): a is Natural => {
//       if (a === min) return true
//       if (Positive.admits(a)) return true
//       return false
//     }

//     const correctedInt = (n: number): Int => {
//       if (n <= min) return min
//       return Positive.corrected(n)
//     }

//     export const corrected = (n: number): Natural => {
//       const int = correctedInt(n)
//       if (!admits(int)) throw new Error('Failed to correct n to Natural')
//       return int
//     }
//   }
// }

export default Int
