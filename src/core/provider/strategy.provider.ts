import { EnvironmentEnum } from '../environment.enum'

export class StrategyProvider<T> {
  constructor(public providers: Record<string, T> = {}) {}

  public get strategy(): Promise<T> {
    return this.buildStrategy().then((key: string) => this.providers[key] ?? null)
  }

  public getDefaultProviderKey(): string {
    const currentEnv = process.env.ENV
    const provider: string = Object.keys(this.providers).find(key => key === currentEnv)
    return provider || EnvironmentEnum.Development
  }

  public async mainStrategy(callbackName: string, args?: any): Promise<any> {
    const provider: T = await this.strategy
    if (provider[callbackName]) return provider[callbackName](args)
  }

  protected async buildStrategy(): Promise<string> {
    const defaultKey: string = this.getDefaultProviderKey()
    return defaultKey || Object.keys(this.providers || {})[0] || null
  }
}
