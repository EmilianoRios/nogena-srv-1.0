// @ts-ignore
import { prisma } from '../../src/database/config.ts'
// @ts-ignore
import {
  EmployeeModel,
  EmployeeUpdateModel,
  EmployeeUpdatePasswordModel
} from '../models/employee.ts'
// @ts-ignore
import { PaginationModel } from '../models/employee.ts'
// @ts-ignore
import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts'

async function createNewEmployee(data: EmployeeModel) {
  try {
    console.log(data)
    const employeeEmail = await prisma.employee.findUnique({
      where: {
        email: data?.email
      }
    })

    if (employeeEmail) {
      const error = 'El usuario ya existe.'
      throw error
    }

    const employeeDni = await prisma.employee.findUnique({
      where: {
        dni: data?.dni
      }
    })

    if (employeeDni) {
      const error = 'El usuario ya existe.'
      throw error
    }

    const hash = await bcrypt.hash(data?.password)

    const newEmployee = await prisma.employee.create({
      data: {
        fullName: data?.fullName,
        dni: data?.dni,
        phone: data?.phone,
        email: data?.email,
        password: hash
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        email: true
      }
    })

    return newEmployee
  } catch (error) {
    throw new Error(error)
  }
}

async function getAllEmployees(pagination: PaginationModel) {
  try {
    const allEmployees = await prisma.employee.findMany({
      take: +pagination?.take,
      skip: +pagination?.take * +pagination?.skip,
      select: {
        fullName: true,
        dni: true,
        phone: true,
        email: true
      },
      orderBy: {
        fullName: 'desc'
      }
    })
    return allEmployees
  } catch (error) {
    throw new Error(error)
  }
}

async function getOneEmployee(id: string) {
  try {
    const oneEmployee = await prisma.employee.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        email: true
      }
    })
    return oneEmployee
  } catch (error) {
    throw new Error(error)
  }
}

async function deleteOneEmployee(id: string) {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id: id
      }
    })

    if (!employee) {
      const error = 'Usuario no encontrado.'
      throw error
    }

    await prisma.employee.delete({
      where: {
        id: id
      }
    })
    return
  } catch (error) {
    throw new Error(error)
  }
}

async function updateOneEmployee(data: EmployeeUpdateModel) {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        email: data?.email
      }
    })

    if (!employee) {
      const error = 'Usuario no encontrado.'
      throw error
    }

    const updateEmployee = await prisma.employee.update({
      where: {
        email: data?.email
      },
      data: {
        ...data
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        email: true
      }
    })
    return updateEmployee
  } catch (error) {
    throw new Error(error)
  }
}

async function updateOneEmployeePassword(data: EmployeeUpdatePasswordModel) {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id: data?.id
      }
    })

    if (!employee) {
      const error = 'Usuario no encontrado.'
      throw error
    }

    const match = await bcrypt.compare(data?.password, employee?.password)

    if (!match) {
      const error = 'La contraseña actual ingresada no es correcta.'
      throw error
    }

    const hash = await bcrypt.hash(data?.newPassword)

    const updateEmployee = await prisma.employee.update({
      where: {
        id: data?.id
      },
      data: {
        password: hash
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        email: true
      }
    })
    return updateEmployee
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewEmployee,
  getAllEmployees,
  getOneEmployee,
  deleteOneEmployee,
  updateOneEmployee,
  updateOneEmployeePassword
}
