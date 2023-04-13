// @ts-ignore
import * as employeeService from '../services/serviceEmployee.ts'
// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
// @ts-ignore
import { EmployeeModel, EmployeeUpdateModel } from '../models/employee.ts'

async function createNewEmployee(ctx: Context) {
  try {
    const body: EmployeeModel = await ctx.request.body('json').value
    const { fullName, dni, phone, email, password } = body

    const newEmployee = await employeeService.createNewEmployee({
      fullName,
      dni,
      phone,
      email,
      password,
    })

    ctx.response.status = 201
    ctx.response.body = { status: 'OK', data: newEmployee }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllEmployees(ctx: Context) {
  try {
    const skip = +ctx.request.url.searchParams.get('page') || 0
    const take = +ctx.request.url.searchParams.get('limit') || 21

    const allEmployees = await employeeService.getAllEmployees({
      skip,
      take,
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: allEmployees,
      page: skip,
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneEmployee(ctx: Context) {
  try {
    const id = await ctx.params.employeeId
    const oneEmployee = await employeeService.getOneEmployee(id)

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: oneEmployee,
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneEmployee(ctx: Context) {
  try {
    const id = await ctx.params.employeeId
    await employeeService.deleteOneEmployee(id)

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneEmployee(ctx: Context) {
  try {
    const body: EmployeeUpdateModel = await ctx.request.body('json').value

    const updatedEmployee = await employeeService.updateOneEmployee(body)

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedEmployee,
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export {
  createNewEmployee,
  getAllEmployees,
  getOneEmployee,
  deleteOneEmployee,
  updateOneEmployee,
}
