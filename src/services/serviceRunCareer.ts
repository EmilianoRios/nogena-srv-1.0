import { prisma } from '../database/config.ts'
import { OneRunsCareers, RunsCareersModel } from '../models/runCareer.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewRunCareer(data: RunsCareersModel) {
  try {
    const currentMonth = new Date(data?.currentMonth)

    const newRunCareer = await prisma.runCareer.create({
      data: {
        careersId: data?.careersId,
        points: data?.points,
        currentMonth: currentMonth,
        kilometers: data?.kilometers
      }
    })
    return newRunCareer
  } catch (error) {
    throw new Error(error)
  }
}
async function getAllRunsCareers(pagination: PaginationModel) {
  try {
    const allRunCareers = await prisma.runCareer.findMany({
      take: +pagination.take,
      skip: +pagination.take * +pagination.skip,
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })

    return allRunCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneRunCareer(data: OneRunsCareers) {
  try {
    const runCareerEmploye = await prisma.runCareer.findUnique({
      where: {
        careersId: data?.careersId
      },
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })
    return runCareerEmploye
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneRunCareer(data: OneRunsCareers) {
  try {
    const runCareerEmploye = await prisma.runCareer.findUnique({
      where: {
        careersId: data?.careersId
      }
    })

    if (!runCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    await prisma.runcareer.delete({
      where: {
        careersId: data?.careersId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneRunCareer(data: RunsCareersModel) {
  try {
    const runCareerEmploye = await prisma.findUnique({
      where: {
        careersId: data?.careersId
      }
    })

    if (!runCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    const updateRunCareer = await prisma.runCareer.update({
      where: {
        careersId: data?.careersId
      },
      data: {
        points: data?.points,
        currentMonth: data?.currentMonth,
        kilometers: data?.kilometers
      }
    })

    return updateRunCareer
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewRunCareer,
  getAllRunsCareers,
  getOneRunCareer,
  deleteOneRunCareer,
  updateOneRunCareer
}
