
type Range = {
  start?: Range.Edge
  end?: Range.Edge
}

namespace Range {

  export type Edge = {
    value: number
    includesSelf: boolean
  } | undefined

  export namespace Edge {

    export const admits = (a: any): a is Edge => {
      const { value, includesSelf } = a
      if (typeof value !== 'number') return false
      if (typeof includesSelf !== 'boolean') return false
      return true
    }

    export const from = (value: number, includesSelf: boolean = true): Edge => {
      const edge = { value, includesSelf }
      if (!admits(edge)) throw new Error(FailedTo.createEdge)
      return edge
    }

    const includesAndEquals = (it: number, { value, includesSelf }: Edge): boolean => {
      return includesSelf && value === it
    }
    export const canBeStartFor = (it: number, edge: Edge): boolean => {
      if (includesAndEquals(it, edge)) return true
      return edge.value < it
    }
    export const canBeEndFor = (it: number, edge: Edge): boolean => {
      if (includesAndEquals(it, edge)) return true
      return it < edge.value
    }

    export enum FailedTo {
      createEdge = 'Failed to create a edge'
    }
  }
}

namespace Range {

  export const admits = (a: any): a is Range => {
    const { start, end } = a
    if (start !== undefined && !Edge.admits(start)) return false
    if (end !== undefined && !Edge.admits(end)) return false
    return true
  }

  export const from = (start: number, length?: number): Range => {
    const startEdge = Edge.from(start)
    const endEdge = (length === undefined)
      ? undefined
      : Edge.from(start + length, false)
    const range = { start: startEdge, end: endEdge }
    if (!admits(range)) throw new Error(FailedTo.createRange)
    return range
  }

  export const upto = (end: number): Range => {
    const range = { end: Edge.from(end, false) }
    if (!admits(range)) throw new Error(FailedTo.createRange)
    return range
  }
}

namespace Range {

  export const includes = (n: number, { start, end }: Range): boolean => {
    if (!Edge.canBeStartFor(n, start)) return false
    if (!Edge.canBeEndFor(n, end)) return false
    return true
  }
}

namespace Range {

  export enum FailedTo {
    createRange = 'Failed to create a range'
  }
}

export default Range
