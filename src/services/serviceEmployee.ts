// @ts-ignore
import { PrismaClient } from '../../generated/client/deno/edge.ts'
// @ts-ignore
import { config } from 'https://deno.land/std@0.163.0/dotenv/mod.ts'

const envVars = await config()

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
})

interface Data {
  fullName: string
  dni: number
  phone: string
  email: string
  password: string
}

async function createNewEmployee(data: Data) {
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        fullName: data?.fullName,
        dni: data?.dni,
        phone: data?.phone,
        email: data?.email,
        password: data?.password,
      },
    })
    return newEmployee
  } catch (error) {
    throw error
  }
}

async function getAllEmployees(data: Data) {
  return
}

async function getOneEmployee(data: Data) {
  return
}

async function deleteOneEmployee(data: Data) {
  return
}

async function updateOneEmployee(data: Data) {
  return
}

export {
  createNewEmployee,
  getAllEmployees,
  getOneEmployee,
  deleteOneEmployee,
  updateOneEmployee,
}
