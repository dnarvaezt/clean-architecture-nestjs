import { EnvironmentEnum } from 'src/core/environment.enum'
import { providerFactory } from './provider.factory'

describe('providerFactory', () => {
  it('should return the correct provider for the specified environment', () => {
    const providers = {
      [EnvironmentEnum.Development]: 'DevelopmentProvider',
      [EnvironmentEnum.Production]: 'ProductionProvider',
      [EnvironmentEnum.Test]: 'TestProvider',
    }

    process.env.ENV = EnvironmentEnum.Production
    const result = providerFactory(providers)
    expect(result).toBe('ProductionProvider')

    process.env.ENV = EnvironmentEnum.Test
    const result2 = providerFactory(providers)
    expect(result2).toBe('TestProvider')
  })

  it('should use the default provider if the environment is not found', () => {
    const providers = {
      [EnvironmentEnum.Development]: 'DevelopmentProvider',
    }

    process.env.ENV = 'NonExistentEnvironment'
    const result = providerFactory(providers)
    expect(result).toBe('DevelopmentProvider')
  })
})
