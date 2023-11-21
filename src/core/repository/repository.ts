import { IFilter } from '../utils'

export abstract class Repository<T> {
  abstract get(id: string, args?: any): Promise<T>

  abstract set(value: T | T[], args?: any): Promise<any>

  abstract update(value: T | T[], args?: any): Promise<any>

  abstract delete(value: string | string[] | T | T[], args?: any): Promise<any>

  abstract count(filter?: IFilter, args?: any): Promise<number>

  abstract search(filter?: IFilter, args?: any): Promise<T[]>

  abstract searchPaginator(filter?: IFilter, args?: any): Promise<{ data: T[]; count: number }>
}
