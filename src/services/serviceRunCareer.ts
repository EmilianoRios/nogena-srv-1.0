import { prisma } from '../database/config.ts'
import {
  OneRunCareers,
  RunsCareersModel,
  RunsCareersUpdateModel
} from '../models/runCareer.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewRunCareer(data: RunsCareersModel) {
  try {
    const currentMonth = new Date(data?.currentMonth)

    const newRunCareer = await prisma.runCareer.create({
      data: {
        careersId: data?.careersId,
        points: Math.round(+data?.kilometers * 1.33589),
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
      },
      orderBy: {
        points: 'desc'
      }
    })
    return allRunCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneRunCareer(data: OneRunCareers) {
  try {
    const runCareerEmploye = await prisma.runCareer.findUnique({
      where: {
        id: data?.runCareerId
      },
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })

    const rank = await prisma.runCareer.count({
      where: {
        points: {
          gt: runCareerEmploye.points
        }
      }
    })

    const equalRanks = await prisma.runCareer.count({
      where: {
        points: runCareerEmploye.points,
        id: {
          lt: runCareerEmploye.id
        }
      }
    })

    return { ...runCareerEmploye, rank: +rank + +equalRanks }
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneRunCareer(data: OneRunCareers) {
  try {
    const runCareerEmploye = await prisma.runCareer.findUnique({
      where: {
        id: data?.runCareerId
      }
    })

    if (!runCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    await prisma.runcareer.delete({
      where: {
        id: data?.runCareerId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneRunCareer(data: RunsCareersUpdateModel) {
  try {
    const runCareerEmploye = await prisma.findUnique({
      where: {
        id: data?.runCareerId
      }
    })

    if (!runCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    const updateRunCareer = await prisma.runCareer.update({
      where: {
        careersId: data?.runCareerId
      },
      data: {
        points: Math.round(+data?.kilometers * 1.33589),
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
