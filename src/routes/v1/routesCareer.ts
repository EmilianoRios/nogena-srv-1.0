// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as careerController from '../../controllers/controllerCareer.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesCareer = new Router()

routesCareer
  .post('/:employeeId', careerController.createNewCareer)
  .get('/', careerController.getAllCareers)
  .get('/:employeeId', careerController.getOneCareer)
  .delete('/:employeeId', validateToken, careerController.deleteOneCareer)
  .patch('/', careerController.updateOneCareer)
