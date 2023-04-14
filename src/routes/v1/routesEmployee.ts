// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
// @ts-ignore
import * as employeeController from '../../controllers/controllerEmployee.ts'

export const routesEmployee = new Router()

routesEmployee
  .post('/', employeeController.createNewEmployee)
  .get('/', employeeController.getAllEmployees)
  .get('/:employeeId', employeeController.getOneEmployee)
  .delete('/:employeeId', employeeController.deleteOneEmployee)
  .patch('/', employeeController.updateOneEmployee)
  .patch('/:employeeId', employeeController.updateOneEmployeePassword)
