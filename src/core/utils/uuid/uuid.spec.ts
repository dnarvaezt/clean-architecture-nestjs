import { uuid } from './uuid'

describe('uuid', () => {
  it('should return a valid UUID string', () => {
    const uuidPattern = /^s[0-9a-f]{7}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    const result = uuid()
    expect(result).toMatch(uuidPattern)
  })

  it('should generate different UUIDs on each call', () => {
    const uuid1 = uuid()
    const uuid2 = uuid()
    expect(uuid1).not.toBe(uuid2)
  })
})
