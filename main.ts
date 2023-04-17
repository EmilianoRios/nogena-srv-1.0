// @ts-ignore
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { routesEmployee } from './src/routes/v1/routesEmployee.ts'

const app = new Application()
const router = new Router()

const prefix = '/api/v1/'

router.use(prefix + 'employee', routesEmployee.routes())

app.use(router.routes())
app.use(routesEmployee.allowedMethods())

await app.listen({ port: 8000 })
