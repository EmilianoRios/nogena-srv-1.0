import { prisma } from '../database/config.ts'
import { OneCareerModel, CareerUpdateModel } from '../models/career.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewCareer(data: OneCareerModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      }
    })

    if (careerEmployee) {
      throw new Error('El ya tiene una carrera.')
    }

    const newCareer = await prisma.careers.create({
      data: {
        employeeId: data?.employeeId
      }
    })

    return newCareer
  } catch (error) {
    throw new Error(error)
  }
}
async function getAllCareers(pagination: PaginationModel) {
  try {
    const allCareers = await prisma.careers.findMany({
      take: +pagination?.take,
      skip: +pagination?.take * +pagination?.skip,
      select: {
        employeeId: true,
        cycleCareer: true,
        walkCareer: true,
        runCareer: true
      }
    })
    return allCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneCareer(data: OneCareerModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      },
      select: {
        employeeId: true,
        cycleCareer: true,
        walkCareer: true,
        runCareer: true
      }
    })
    return careerEmployee
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneCareer(data: OneCareerModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      }
    })

    if (!careerEmployee) {
      throw new Error('Usuario no encontrado.')
    }

    await prisma.career.delete({
      where: {
        employeeId: data?.employeeId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneCareer(data: CareerUpdateModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      }
    })

    if (!careerEmployee) {
      throw new Error('Usuario no encontrado.')
    }

    const updateCareerEmployee = await prisma.careers.update({
      where: {
        employeeId: data?.employeeId
      },
      data: {
        cycleCareerId: data?.cycleCareerId,
        walkCareerId: data?.walkCareerId,
        runCareerId: data?.runCareerId
      }
    })
    return updateCareerEmployee
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewCareer,
  getAllCareers,
  getOneCareer,
  deleteOneCareer,
  updateOneCareer
}
