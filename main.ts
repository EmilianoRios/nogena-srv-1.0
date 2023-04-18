// @ts-ignore
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { routesEmployee } from './src/routes/v1/routesEmployee.ts'
import { routesCareer } from './src/routes/v1/routesCareer.ts'
import { routesCycleCareer } from './src/routes/v1/routesCycleCareer.ts'

const app = new Application()
const router = new Router()

const prefix = '/api/v1/'

router.use(prefix + 'employee', routesEmployee.routes())
router.use(prefix + 'careers', routesCareer.routes())
router.use(prefix + 'cyclecareer', routesCycleCareer.routes())

app.use(router.routes())
app.use(routesEmployee.allowedMethods())

await app.listen({ port: 8000 })
