// @ts-ignore
import * as employeeService from '../services/serviceEmployee.ts'

interface Data {
  fullName: string
  dni: number
  phone: string
  email: string
  password: string
}

async function createNewEmployee(ctx) {
  const body: Data = await ctx.request.body('json').value
  const { fullName, dni, phone, email, password } = body
  try {
    const newEmployee = await employeeService.createNewEmployee({
      fullName,
      dni,
      phone,
      email,
      password,
    })
    ctx.response.status = 200
    ctx.response.body = newEmployee
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { error: error }
  }
}

async function getAllEmployees(ctx) {
  ctx.response.body = 'HOLA'
}

async function getOneEmployee(ctx) {
  ctx.response.body = 'HOLA2'
}

async function deleteOneEmployee(ctx) {
  ctx.response.body = 'HOLA3'
}

async function updateOneEmployee(ctx) {
  ctx.response.body = 'HOLA4'
}

export {
  createNewEmployee,
  getAllEmployees,
  getOneEmployee,
  deleteOneEmployee,
  updateOneEmployee,
}
