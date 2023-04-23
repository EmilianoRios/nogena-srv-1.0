// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as walkCareerController from '../../controllers/controllerWalkCareer.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesWalkCareer = new Router()

routesWalkCareer
  .post('/', walkCareerController.createNewWalkCareer)
  .get('/', walkCareerController.getAllWalksCareers)
  .get('/:careerId', walkCareerController.getOneWalkCareer)
  .delete('/:careerId', walkCareerController.deleteOneWalkCareer)
  .patch('/', walkCareerController.updateOneWalkCareer)
