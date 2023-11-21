import { Repository } from '../repository'
import { IFilter } from '../utils'
import { StrategySimpleRepository } from './strategy-simple-repository.provider'

export class StrategyRepository<T> extends StrategySimpleRepository<T> implements Repository<T> {
  async count(filter?: IFilter): Promise<number> {
    return this.mainStrategy('count', filter)
  }

  async search(filter?: IFilter): Promise<any[]> {
    return this.mainStrategy('search', filter)
  }

  async searchPaginator(filter?: IFilter): Promise<{ data: any[]; count: number }> {
    return this.mainStrategy('searchPaginator', filter)
  }

  inputFormat(data: any) {
    return data
  }

  outputFormat(data: any) {
    return data
  }
}
