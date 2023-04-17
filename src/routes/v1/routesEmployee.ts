// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as employeeController from '../../controllers/controllerEmployee.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesEmployee = new Router()

routesEmployee
  .post('/', employeeController.createNewEmployee)
  .post('/login', employeeController.logInUser)
  .get('/', employeeController.getAllEmployees)
  .get('/:employeeId', employeeController.getOneEmployee)
  .get(
    '/auth/authenticate',
    validateToken,
    employeeController.authenticateToken
  )
  .delete('/:employeeId', employeeController.deleteOneEmployee)
  .patch('/', employeeController.updateOneEmployee)
  .patch('/:employeeId', employeeController.updateOneEmployeePassword)
