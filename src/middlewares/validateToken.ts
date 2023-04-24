// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
// @ts-ignore
import { verify } from 'https://deno.land/x/djwt/mod.ts'
import { key } from '../utils/apiKey.ts'

async function validateToken(ctx: Context, next: () => Promise<void>) {
  try {
    const auth = ctx.request.headers.get('Authorization')

    if (!auth)
      return (ctx.response.body = {
        status: 'FAILED',
        error: 'Acceso no disponible'
      })

    const token = auth.trim().split(' ')
    const cleanToken = token[token.length - 1]

    if (!cleanToken)
      return (ctx.response.body = {
        status: 'FAILED',
        error: 'Acceso no disponible'
      })

    const validToken = await verify(cleanToken, key)

    if (!validToken) throw new Error('Token no valido')

    ctx.state.user = validToken

    await next()
  } catch (error) {
    ctx.response.status = 401
    ctx.response.body = {
      status: 'FAILED',
      error: error.message || 'No estas autorizado a ingresar a esta ruta'
    }
    return
  }
}

export { validateToken }
