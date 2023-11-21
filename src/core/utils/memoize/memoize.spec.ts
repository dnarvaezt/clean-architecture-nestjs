import { memoize } from './memoize'

describe('memoize', () => {
  it('should memoize the results correctly', () => {
    const simpleFunction = (a: number, b: number) => a + b

    const memoizedFunction = memoize(simpleFunction)

    const result1 = memoizedFunction(2, 3)
    const result2 = memoizedFunction(2, 3)

    expect(result1).toBe(result2)

    const result3 = memoizedFunction(4, 5)

    expect(result3).not.toBe(result1)
    expect(result3).not.toBe(result2)
  })
})
