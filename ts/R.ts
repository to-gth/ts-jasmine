import Brand from "./Brand";
import Range from "./Range";
import Int from "./Int";

type R = Brand<number, 'R'>

namespace R {

  const min = 0
  const max = 20
  const length = max - min
  const range = Range.from(min, length)

  export const admits = (n: number): n is R => {
    if (!Int.admits(n)) throw new Error('Failed to admit n as R because n is not Int')
    if (!Range.includes(n, range)) throw new Error('Failed to admit n as R because n is out of range')
    return true
  }
}

export default R
