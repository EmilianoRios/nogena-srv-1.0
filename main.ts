import 'https://deno.land/std@0.184.0/dotenv/load.ts'
// @ts-ignore
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { routesEmployee } from './src/routes/v1/routesEmployee.ts'
import { routesCareer } from './src/routes/v1/routesCareer.ts'
import { routesCycleCareer } from './src/routes/v1/routesCycleCareer.ts'
import { routesRunCareer } from './src/routes/v1/routesRunCareer.ts'
import { routesWalkCareer } from './src/routes/v1/routesWalkCareer.ts'
import { routesPost } from './src/routes/v1/routesPost.ts'
import { routesComment } from './src/routes/v1/routesComment.ts'

const app = new Application()
const router = new Router()

const prefix = '/api/v1/'

router.use(prefix + 'employee', routesEmployee.routes())
router.use(prefix + 'career', routesCareer.routes())
router.use(prefix + 'cyclecareer', routesCycleCareer.routes())
router.use(prefix + 'runcareer', routesRunCareer.routes())
router.use(prefix + 'walkcareer', routesWalkCareer.routes())
router.use(prefix + 'post', routesPost.routes())
router.use(prefix + 'comment', routesComment.routes())

app.use(router.routes())
app.use(routesEmployee.allowedMethods())

await app.listen({ port: 8000 })
