export abstract class SimpleRepository<T> {
  abstract get(id?: string, args?: any): Promise<T>

  abstract set(item: T, args?: any): Promise<any>

  abstract update(item: T, args?: any): Promise<any>

  abstract delete(id?: string | T, args?: any): Promise<any>
}
