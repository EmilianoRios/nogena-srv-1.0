// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as cycleCareerController from '../../controllers/controllerCycleCareer.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesCycleCareer = new Router()

routesCycleCareer
  .post('/', cycleCareerController.createNewCycleCareer)
  .get('/', cycleCareerController.getAllCyclesCareers)
  .get('/:careerId', cycleCareerController.getOneCycleCareer)
  .delete('/:careerId', cycleCareerController.deleteOneCycleCareer)
  .patch('/', cycleCareerController.updateOneCycleCareer)
