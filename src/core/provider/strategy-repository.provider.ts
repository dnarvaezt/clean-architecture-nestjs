import { Repository } from '../repository'
import { IUbitsFilter } from '../utils'
import { StrategySimpleRepository } from './strategy-simple-repository.provider'

export class StrategyRepository<T> extends StrategySimpleRepository<T> implements Repository<T> {
  async count(filter?: IUbitsFilter): Promise<number> {
    return this.mainStrategy('count', filter)
  }

  async search(filter?: IUbitsFilter): Promise<any[]> {
    return this.mainStrategy('search', filter)
  }

  async searchPaginator(filter?: IUbitsFilter): Promise<{ data: any[]; count: number }> {
    return this.mainStrategy('searchPaginator', filter)
  }

  inputFormat(data: any) {
    return data
  }

  outputFormat(data: any) {
    return data
  }
}
