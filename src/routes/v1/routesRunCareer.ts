// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as runCareerController from '../../controllers/controllerRunCareer.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesRunCareer = new Router()

routesRunCareer
  .post('/', runCareerController.createNewRunCareer)
  .get('/', runCareerController.getAllRunsCareers)
  .get('/:runCareerId', runCareerController.getOneRunCareer)
  .delete('/:runCareerId', runCareerController.deleteOneRunCareer)
  .patch('/', runCareerController.updateOneRunCareer)
