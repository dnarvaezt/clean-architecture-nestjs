import { EnvironmentEnum } from 'src/core/environment.enum'

export const providerFactory = (providers: Record<string, any>): any => {
  const currentEnv = process.env.ENV
  const providerKey =
    Object.keys(providers).find(key => key === currentEnv) || EnvironmentEnum.Development
  const provider = providers[providerKey]

  return provider
}
