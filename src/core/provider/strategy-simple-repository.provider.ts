import { SimpleRepository } from '../simple-repository'
import { StrategyProvider } from './strategy.provider'

export class StrategySimpleRepository<T>
  extends StrategyProvider<T>
  implements SimpleRepository<T>
{
  async get(id?: string): Promise<any> {
    return this.mainStrategy('get', id)
  }

  async set(item: any): Promise<any> {
    return this.mainStrategy('set', item)
  }

  async update(item: any): Promise<any> {
    return this.mainStrategy('update', item)
  }

  async delete(id?: any): Promise<any> {
    return this.mainStrategy('delete', id)
  }
}
