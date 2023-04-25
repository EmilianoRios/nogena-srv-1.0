// @ts-ignore
import { hash, verify } from 'https://deno.land/x/scrypt@v4.2.1/mod.ts'
// @ts-ignore
import { create } from 'https://deno.land/x/djwt/mod.ts'
import { prisma } from '../database/config.ts'
import {
  EmployeeAccessToken,
  EmployeeLogInModel,
  EmployeeModel,
  EmployeeUpdateModel,
  EmployeeUpdatePasswordModel
} from '../models/employee.ts'
import { PaginationModel } from '../models/pagination.ts'
import { key } from '../utils/apiKey.ts'

async function createNewEmployee(data: EmployeeModel) {
  try {
    const employeeUsername = await prisma.employee.findUnique({
      where: {
        username: data?.username
      }
    })

    if (employeeUsername) {
      throw 'El usuario ya existe.'
    }

    const employeeDni = await prisma.employee.findUnique({
      where: {
        dni: data?.dni
      }
    })

    if (employeeDni) {
      throw 'El usuario ya existe.'
    }

    const passwordHash = await hash(data?.password)

    const newEmployee = await prisma.employee.create({
      data: {
        fullName: data?.fullName,
        dni: data?.dni,
        phone: data?.phone,
        username: data?.username,
        password: passwordHash
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        username: true,
        role: true
      }
    })

    const newCareer = await prisma.careers.create({
      data: {
        employeeId: newEmployee?.id
      },
      select: {
        id: true
      }
    })

    return { newEmployee, newCareer }
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
        username: true
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
        username: true
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
      throw 'Usuario no encontrado.'
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
        username: data?.username
      }
    })

    if (!employee) {
      throw 'Usuario no encontrado.'
    }

    const updateEmployee = await prisma.employee.update({
      where: {
        username: data?.username
      },
      data: {
        ...data
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        username: true
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
      throw 'Usuario no encontrado.'
    }

    const match = await verify(data?.password, employee?.password)

    if (!match) {
      throw 'La contraseña actual ingresada no es correcta.'
    }

    const passwordHash = await hash(data?.newPassword)

    const updateEmployee = await prisma.employee.update({
      where: {
        id: data?.id
      },
      data: {
        password: passwordHash
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        username: true
      }
    })
    return updateEmployee
  } catch (error) {
    throw new Error(error)
  }
}

async function logInUser(data: EmployeeLogInModel) {
  try {
    const foundedUser = await prisma.employee.findUnique({
      where: {
        username: data?.username
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        username: true,
        password: true,
        role: true
      }
    })

    if (!foundedUser) {
      throw 'Correo o contraseña incorrectas'
    }

    const match = await verify(data?.password, foundedUser?.password)

    if (!match) {
      throw 'Correo o contraseña incorrectas'
    }

    const careerIdEmployee = await prisma.careers.findMany({
      where: {
        employeeId: foundedUser?.id
      },
      select: {
        id: true
      }
    })

    const accessToken = await create(
      {
        alg: 'HS256',
        typ: 'JWT'
      },
      {
        id: foundedUser?.id
      },
      key
    )

    const loggedUser = {
      token: accessToken,
      id: foundedUser?.id,
      fullName: foundedUser?.fullName,
      dni: foundedUser?.dni,
      phone: foundedUser?.phone,
      username: foundedUser?.username,
      role: foundedUser?.role,
      careerId: careerIdEmployee[0]?.id
    }

    return loggedUser
  } catch (error) {
    throw new Error(error)
  }
}

async function authenticateToken(data: EmployeeAccessToken) {
  try {
    const foundedUserWithTokenId = await prisma.employee.findUnique({
      where: {
        id: data?.id
      },
      select: {
        id: true,
        fullName: true,
        dni: true,
        phone: true,
        username: true,
        role: true
      }
    })

    if (!foundedUserWithTokenId) {
      const error = 'No se ha podido autenticar al usuario'
      throw error
    }

    const careerIdEmployee = await prisma.careers.findMany({
      where: {
        employeeId: foundedUserWithTokenId?.id
      },
      select: {
        id: true
      }
    })

    const user = {
      ...foundedUserWithTokenId,
      careerId: careerIdEmployee[0]?.id
    }

    return user
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
  updateOneEmployeePassword,
  logInUser,
  authenticateToken
}
