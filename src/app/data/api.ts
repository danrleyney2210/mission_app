import { env } from '@/env'

export async function api<T = unknown>(
  path?: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const baseUrl = 'http://localhost:3333'

  const data = await fetch(`${baseUrl}/mission${path}`, {
    // Se o método não for especificado, padrão para 'GET'
    ...init,
  })
  const result = await data.json()
  // const url = new URL(apiPrefix.concat(path), baseUrl)

  return result
}
