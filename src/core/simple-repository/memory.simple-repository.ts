import { SimpleRepository } from './simple-repository'

export class MemorySimpleRepository<T> implements SimpleRepository<T> {
  public item: T = null

  constructor(item: T) {
    this.item = item
  }

  async get(): Promise<T> {
    return this.item
  }

  async set(item: T): Promise<any> {
    this.item = item
  }

  async update(item: T): Promise<any> {
    this.item = item
  }

  async delete(): Promise<any> {
    this.item = null
  }
}
