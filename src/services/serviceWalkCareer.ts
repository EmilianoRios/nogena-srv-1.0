import { prisma } from '../database/config.ts'
import { OneWalksCareers, WalksCareersModel } from '../models/walkCareer.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewWalkCareer(data: WalksCareersModel) {
  try {
    const currentMonth = new Date(data?.currentMonth)

    const newWalkCareer = await prisma.walkCareer.create({
      data: {
        careersId: data?.careersId,
        points: data?.points,
        currentMonth: currentMonth,
        kilometers: data?.kilometers
      }
    })
    return newWalkCareer
  } catch (error) {
    throw new Error(error)
  }
}
async function getAllWalksCareers(pagination: PaginationModel) {
  try {
    const allWalkCareers = await prisma.walkCareer.findMany({
      take: +pagination.take,
      skip: +pagination.take * +pagination.skip,
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })

    return allWalkCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneWalkCareer(data: OneWalksCareers) {
  try {
    const walkCareerEmploye = await prisma.walkCareer.findUnique({
      where: {
        careersId: data?.careersId
      },
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })
    return walkCareerEmploye
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneWalkCareer(data: OneWalksCareers) {
  try {
    const walkCareerEmploye = await prisma.walkCareer.findUnique({
      where: {
        careersId: data?.careersId
      }
    })

    if (!walkCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    await prisma.walkcareer.delete({
      where: {
        careersId: data?.careersId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneWalkCareer(data: WalksCareersModel) {
  try {
    const walkCareerEmploye = await prisma.findUnique({
      where: {
        careersId: data?.careersId
      }
    })

    if (!walkCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    const updateWalkCareer = await prisma.walkCareer.update({
      where: {
        careersId: data?.careersId
      },
      data: {
        points: data?.points,
        currentMonth: data?.currentMonth,
        kilometers: data?.kilometers
      }
    })

    return updateWalkCareer
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewWalkCareer,
  getAllWalksCareers,
  getOneWalkCareer,
  deleteOneWalkCareer,
  updateOneWalkCareer
}
