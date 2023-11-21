import { SortEnum } from '../utils'
import { MemoryRepository } from './memory.repository'

describe('MemoryRepository', () => {
  let memoryRepo

  beforeEach(() => {
    memoryRepo = new MemoryRepository([])
  })

  afterEach(() => {
    memoryRepo = null
  })

  it('should set and get an item', async () => {
    const item = { id: '1', name: 'Item 1' }
    await memoryRepo.set(item)
    const result = await memoryRepo.get('1')
    expect(result).toEqual(item)
  })

  it('should set array and get an item', async () => {
    const item = { id: '1', name: 'Item 1' }
    await memoryRepo.set([item])
    const result = await memoryRepo.get('1')
    expect(result).toEqual(item)
  })

  it('should set array without ID and get an item', async () => {
    const item = { name: 'Item 1' }
    await memoryRepo.set([item])

    expect((await memoryRepo.search()).length).toEqual(1)
  })

  it('should set null and get an item', async () => {
    expect(await memoryRepo.search()).toEqual([])

    const item = null
    await memoryRepo.set(item)

    expect(await memoryRepo.search()).toEqual([])
  })

  it('should update and get an item', async () => {
    const item = { id: '1', name: 'Item 1' }
    await memoryRepo.set(item)
    expect(await memoryRepo.get('1')).toEqual(item)

    const updatedItem = { id: '1', name: 'Item 2' }
    await memoryRepo.update(updatedItem)
    expect(await memoryRepo.get('1')).toEqual(updatedItem)
  })

  it('should delete and get an item', async () => {
    const item = { id: '1', name: 'Item 1' }
    await memoryRepo.set(item)
    expect(await memoryRepo.get('1')).toEqual(item)

    await memoryRepo.delete('1')
    expect(await memoryRepo.get('1')).toEqual({})
  })

  it('should delete object and get an item', async () => {
    const item = { id: '1', name: 'Item 1' }
    await memoryRepo.set(item)
    expect(await memoryRepo.get('1')).toEqual(item)

    await memoryRepo.delete(item)
    expect(await memoryRepo.get('1')).toEqual({})
  })

  it('should return all items when filter is null', async () => {
    memoryRepo = new MemoryRepository([{ id: '1', name: 'Item 1' }])
    const filter = null
    const result = await memoryRepo.searchPaginator(filter)
    expect(result.count).toEqual(1)
  })

  it('should return all items when filter args is empty', async () => {
    memoryRepo = new MemoryRepository([{ id: '1', name: 'Item 1' }])
    const filter = { args: [] }
    const result = await memoryRepo.searchPaginator(filter)
    expect(result.count).toEqual(1)
  })

  it('should return items sorted in ascending order', async () => {
    memoryRepo = new MemoryRepository([
      { id: '1', name: 'Item 1' },
      { id: '0', name: 'Item 0' },
    ])
    const filter = { order: { key: 'id', sort: SortEnum.ASC } }
    const result = await memoryRepo.searchPaginator(filter)
    expect(result.count).toEqual(2)
    expect(result.data[0].id).toEqual('0')
    expect(result.data[1].id).toEqual('1')
  })

  it('should return items sorted in descending order', async () => {
    memoryRepo = new MemoryRepository([
      { id: '1', name: 'Item 1' },
      { id: '0', name: 'Item 0' },
    ])
    const filter = { order: { key: 'id', sort: SortEnum.DESC } }
    const result = await memoryRepo.searchPaginator(filter)
    expect(result.count).toEqual(2)
    expect(result.data[0].id).toEqual('1')
    expect(result.data[1].id).toEqual('0')
  })
})
